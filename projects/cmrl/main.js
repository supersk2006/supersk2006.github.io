// --- 1. CONFIGURATION AND SETUP ---
const MAP_WIDTH = 1200;
const MAP_HEIGHT = 800;

// Geographic bounding box for Chennai Metro, calculated from your stops.json
const bounds = {
    minLon: 80.1691,
    maxLon: 80.3134,
    minLat: 12.9890,
    maxLat: 13.1868
};

// DOM Elements
const svg = document.getElementById('metro-map');
const stationData = {}; // A quick-lookup map for station info
const routeData = {}; // A quick-lookup map for route info
const linePaths = {}; // To store rendered SVG path elements
const lineStops = {}; // To store the sequence of stops for each line/direction

// --- 2. HELPER FUNCTIONS ---

/**
 * Converts geographic coordinates (Latitude, Longitude) to SVG pixel coordinates (x, y).
 * @param {number} lat - Latitude.
 * @param {number} lon - Longitude.
 * @returns {{x: number, y: number}} - The pixel coordinates.
 */
function project(lat, lon) {
    const x = ((lon - bounds.minLon) / (bounds.maxLon - bounds.minLon)) * MAP_WIDTH;
    // SVG y-coordinate is inverted (0 at the top)
    const y = MAP_HEIGHT - (((lat - bounds.minLat) / (bounds.maxLat - bounds.minLat)) * MAP_HEIGHT);
    return { x, y };
}

/**
 * Converts a "HH:MM:SS" time string to the total number of seconds from midnight.
 * @param {string} timeStr - The time string.
 * @returns {number} - Total seconds from midnight.
 */
function timeToSeconds(timeStr) {
    if (!timeStr) return 0;
    const [h, m, s] = timeStr.split(':').map(Number);
    return h * 3600 + m * 60 + s;
}


// --- 3. DATA LOADING AND PRE-PROCESSING ---

/**
 * Fetches all our required JSON data files.
 */
async function loadData() {
    const [routes, stops, shapes, schedule, travelTimes] = await Promise.all([
        fetch('./data/routes.json').then(res => res.json()),
        fetch('./data/stops.json').then(res => res.json()),
        fetch('./data/shapes.json').then(res => res.json()),
        fetch('./data/schedule.json').then(res => res.json()),
        fetch('./data/travel_times.json').then(res => res.json())
    ]);
    return { routes, stops, shapes, schedule, travelTimes };
}

/**
 * Pre-processes the loaded data for easier access.
 * @param {object} data - The raw data loaded from JSON files.
 */
function preprocessData(data) {
    // Create a quick-lookup map for stations by their ID
    data.stops.forEach(stop => {
        stationData[stop.stop_id] = stop;
    });

    // Create a quick-lookup map for routes by their ID
    data.routes.forEach(route => {
        routeData[route.route_id] = route;
    });

    // --- Define the exact sequence of stops for each line and direction ---
    // This is a crucial step that needs to be manually defined based on the metro map.
    lineStops['blue-line-down'] = [
        'wimco-nagar-depot', 'wimco-nagar', 'tiruvottriyur', 'tiruvottriyur-theradi', 'kaladipet', 'tollgate',
        'new-washermanpet', 'tondiarpet', 'sir-theagaraya-college', 'washermanpet', 'mannadi', 'high-court',
        'central-metro', 'government-estate', 'lic', 'thousand-lights', 'ag-dms', 'teynampet', 'nandanam',
        'saidapet', 'little-mount', 'guindy', 'alandur', 'nanganallur-road', 'meenambakkam', 'airport'
    ];
    lineStops['blue-line-up'] = [...lineStops['blue-line-down']].reverse();

    lineStops['green-line-down'] = [
        'central-metro', 'egmore', 'nehru-park', 'kilpauk-medical-college', 'pachaiyappas-college',
        'shenoy-nagar', 'anna-nagar-east', 'anna-nagar-tower', 'thirumangalam', 'koyambedu', 'cmbt',
        'arumbakkam', 'vadapalani', 'ashok-nagar', 'ekkattuthangal', 'alandur', 'st-thomas-mount'
    ];
    lineStops['green-line-up'] = [...lineStops['green-line-down']].reverse();
}


// --- 4. MAP RENDERING ---

/**
 * Renders the metro map (lines and stations) onto the SVG canvas.
 * @param {object} data - The pre-processed data.
 */
function renderMap(data) {
    const { routes, stops, shapes } = data;

    // Render track paths
    for (const routeId in shapes) {
        const route = routeData[routeId];
        const pathCoords = shapes[routeId]
            .map(coord => project(coord[1], coord[0])) // lon, lat -> x, y
            .map(p => `${p.x},${p.y}`)
            .join(' ');
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        path.setAttribute('points', pathCoords);
        path.setAttribute('stroke', route ? route.color : '#555');
        path.setAttribute('stroke-width', '5');
        path.setAttribute('fill', 'none');
        svg.appendChild(path);
        
        // Store the path element for later use in animation
        linePaths[routeId] = path;
    }
    
    // Render stations
    stops.forEach(stop => {
        const { x, y } = project(stop.lat, stop.lon);
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('r', '6');
        circle.setAttribute('fill', 'white');
        circle.setAttribute('stroke', '#333');
        circle.setAttribute('stroke-width', '2');
        
        // Add a title for hover effect
        const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        title.textContent = stop.stop_name;
        circle.appendChild(title);
        
        svg.appendChild(circle);
    });
}


// --- 5. SIMULATION ENGINE ---

let activeTrains = {}; // To keep track of trains currently on the map

/**
 * The main animation loop.
 * @param {object} data - The pre-processed data.
 */
function animationLoop(data) {
    const now = new Date();
    // Use IST for simulation
    const nowIST = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    const currentTimeInSeconds = nowIST.getHours() * 3600 + nowIST.getMinutes() * 60 + nowIST.getSeconds();

    // Determine the current schedule period (e.g., peak, off-peak)
    const dayType = (nowIST.getDay() === 0) ? 'sunday' : 'weekday'; // Simplified: Sunday vs Weekday
    const currentSchedule = data.schedule[dayType] || data.schedule.weekday;
    const period = currentSchedule.find(p => {
        const start = timeToSeconds(p.start);
        const end = timeToSeconds(p.end);
        return currentTimeInSeconds >= start && currentTimeInSeconds <= end;
    });

    if (!period) {
        // No service running
        requestAnimationFrame(() => animationLoop(data));
        return;
    }

    // --- Generate "Virtual" Train Trips ---
    const allTrips = [];
    for (const routeId in period.headways_mins) {
        const headwaySeconds = period.headways_mins[routeId] * 60;
        const serviceStartTime = timeToSeconds(currentSchedule[0].start);

        for (let t = serviceStartTime; t < currentTimeInSeconds; t += headwaySeconds) {
            const tripId = `${routeId}-${t}`;
            // A trip is only valid if it started recently enough to still be on the map
            // (A full journey might take ~60-70 mins or 3600-4200 seconds)
            if (currentTimeInSeconds - t < 5000) { 
                allTrips.push({
                    id: tripId,
                    routeId: routeId.includes('blue') ? 'blue-line' : 'green-line',
                    direction: routeId.includes('up') ? 'up' : 'down',
                    fullRouteId: routeId,
                    startTime: t
                });
            }
        }
    }

    // --- Update and Animate Trains ---
    allTrips.forEach(trip => {
        const timeSinceStart = currentTimeInSeconds - trip.startTime;
        let cumulativeTime = 0;
        let trainPosition = null;

        const stopsOnLine = lineStops[trip.routeId + '-' + trip.direction];
        if (!stopsOnLine) return; // Skip short loops for now

        for (let i = 0; i < stopsOnLine.length - 1; i++) {
            const fromStopId = stopsOnLine[i];
            const toStopId = stopsOnLine[i + 1];
            const key = `${fromStopId}_${toStopId}`;
            const segmentTravelTime = data.travelTimes[key] || 150; // Default if not found

            if (timeSinceStart >= cumulativeTime && timeSinceStart < cumulativeTime + segmentTravelTime) {
                const progress = (timeSinceStart - cumulativeTime) / segmentTravelTime;
                
                // Find the station's approximate distance along the path
                const path = linePaths[trip.routeId];
                const totalLength = path.getTotalLength();
                
                // Approximate distance by stop index. A more advanced method would pre-calculate this.
                const startDist = (i / (stopsOnLine.length - 1)) * totalLength;
                const endDist = ((i + 1) / (stopsOnLine.length - 1)) * totalLength;
                
                const currentDist = startDist + progress * (endDist - startDist);
                trainPosition = path.getPointAtLength(currentDist);
                break;
            }
            cumulativeTime += segmentTravelTime;
        }

        // Now render the train
        if (trainPosition) {
            let trainElement = document.getElementById(trip.id);
            if (!trainElement) {
                // Create a new SVG element for the train
                trainElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                trainElement.setAttribute('id', trip.id);
                trainElement.setAttribute('r', '7');
                trainElement.setAttribute('fill', routeData[trip.routeId].color);
                trainElement.setAttribute('stroke', 'white');
                trainElement.setAttribute('stroke-width', '2');
                svg.appendChild(trainElement);
                activeTrains[trip.id] = trainElement;
            }
            trainElement.setAttribute('cx', trainPosition.x);
            trainElement.setAttribute('cy', trainPosition.y);
        }
    });
    
    // Request the next frame to continue the animation
    requestAnimationFrame(() => animationLoop(data));
}


// --- 6. INITIALIZATION ---
// Main function to start the application
async function main() {
    const data = await loadData();
    preprocessData(data);
    renderMap(data);
    
    // Kick off the animation loop
    requestAnimationFrame(() => animationLoop(data));
}

main();