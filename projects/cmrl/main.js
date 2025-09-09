// --- [Code from sections 1, 2, 3 is unchanged] ---
const MAP_WIDTH = 1200;
const MAP_HEIGHT = 800;
const PADDING = 60;
const bounds = { minLon: 80.1691, maxLon: 80.3134, minLat: 12.9890, maxLat: 13.1868 };
const svg = document.getElementById('metro-map');
const stationData = {}; 
const routeData = {}; 
const linePaths = {}; 
const lineStops = {}; 
function project(lat, lon) {
    const effectiveWidth = MAP_WIDTH - 2 * PADDING;
    const effectiveHeight = MAP_HEIGHT - 2 * PADDING;
    let x = ((lon - bounds.minLon) / (bounds.maxLon - bounds.minLon)) * effectiveWidth + PADDING;
    let y = (MAP_HEIGHT - PADDING) - (((lat - bounds.minLat) / (bounds.maxLat - bounds.minLat)) * effectiveHeight);
    return { x, y };
}
function timeToSeconds(timeStr) {
    if (!timeStr) return 0;
    const [h, m, s] = timeStr.split(':').map(Number);
    return h * 3600 + m * 60 + s;
}
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
function preprocessData(data) {
    data.stops.forEach(stop => { stationData[stop.stop_id] = stop; });
    data.routes.forEach(route => { routeData[route.route_id] = route; });
    lineStops['blue-line-down'] = ['wimco-nagar-depot', 'wimco-nagar', 'tiruvottriyur', 'tiruvottriyur-theradi', 'kaladipet', 'tollgate', 'new-washermanpet', 'tondiarpet', 'sir-theagaraya-college', 'washermanpet', 'mannadi', 'high-court', 'central-metro', 'government-estate', 'lic', 'thousand-lights', 'ag-dms', 'teynampet', 'nandanam', 'saidapet', 'little-mount', 'guindy', 'alandur', 'nanganallur-road', 'meenambakkam', 'airport'];
    lineStops['blue-line-up'] = [...lineStops['blue-line-down']].reverse();
    lineStops['green-line-down'] = ['central-metro', 'egmore', 'nehru-park', 'kilpauk-medical-college', 'pachaiyappas-college', 'shenoy-nagar', 'anna-nagar-east', 'anna-nagar-tower', 'thirumangalam', 'koyambedu', 'cmbt', 'arumbakkam', 'vadapalani', 'ashok-nagar', 'ekkattuthangal', 'alandur', 'st-thomas-mount'];
    lineStops['green-line-up'] = [...lineStops['green-line-down']].reverse();
}

// --- 4. MAP RENDERING ---
function renderMap(data) {
    const { shapes } = data;
    for (const routeId in shapes) {
        const route = routeData[routeId];
        const pathCoords = shapes[routeId].map(coord => project(coord[1], coord[0])).map(p => `${p.x},${p.y}`).join(' ');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        path.setAttribute('points', pathCoords);
        path.setAttribute('stroke', route ? route.color : '#555');
        path.setAttribute('stroke-width', '5');
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('stroke-linejoin', 'round');
        svg.appendChild(path);
        linePaths[routeId] = path;
    }
}
function distributeAndDrawStations() {
    for (const lineId in lineStops) {
        const stopIds = lineStops[lineId];
        const routeId = lineId.includes('blue') ? 'blue-line' : 'green-line';
        const path = linePaths[routeId];
        if (!path) continue;
        const totalLength = path.getTotalLength();
        stopIds.forEach((stopId, index) => {
            const proportion = index / (stopIds.length - 1);
            const position = path.getPointAtLength(proportion * totalLength);
            stationData[stopId].visualPosition = position;
        });
    }
    for (const stopId in stationData) {
        const stop = stationData[stopId];
        if (stop.visualPosition) {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', stop.visualPosition.x);
            circle.setAttribute('cy', stop.visualPosition.y);
            circle.setAttribute('r', '6');
            circle.setAttribute('fill', 'white');
            circle.setAttribute('stroke', '#333');
            circle.setAttribute('stroke-width', '2');
            
            // **NEW** Make stations clickable
            circle.style.cursor = 'pointer';
            circle.addEventListener('click', () => {
                alert(stop.stop_name);
            });
            
            const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
            title.textContent = stop.stop_name;
            circle.appendChild(title);
            svg.appendChild(circle);
        }
    }
}

// --- 5. SIMULATION ENGINE ---
let activeTrains = {};
function animationLoop(data) {
    const now = new Date();
    const nowIST = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    const currentTimeInSeconds = nowIST.getHours() * 3600 + nowIST.getMinutes() * 60 + nowIST.getSeconds();
    const day = nowIST.getDay();
    const dayType = day === 0 ? 'sunday' : day === 6 ? 'saturday' : 'weekday';
    const currentSchedule = data.schedule[dayType];
    if (!currentSchedule) { requestAnimationFrame(() => animationLoop(data)); return; }
    const period = currentSchedule.find(p => {
        const start = timeToSeconds(p.start);
        const end = timeToSeconds(p.end);
        return currentTimeInSeconds >= start && currentTimeInSeconds <= end;
    });
    if (!period) { requestAnimationFrame(() => animationLoop(data)); return; }
    const allTrips = [];
    for (const routeId in period.headways_mins) {
        const headwaySeconds = period.headways_mins[routeId] * 60;
        const serviceStartTime = timeToSeconds(currentSchedule[0].start);
        for (let t = serviceStartTime; t < currentTimeInSeconds; t += headwaySeconds) {
            const tripId = `${routeId}-${t}`;
            if (currentTimeInSeconds - t < 5000) {
                allTrips.push({ 
                    id: tripId, 
                    routeId: routeId.includes('blue') ? 'blue-line' : 'green-line', 
                    direction: routeId.includes('up') ? 'up' : 'down', 
                    fullRouteId: routeId, 
                    // **NEW** Add randomization to the start time
                    startTime: t - (Math.random() * headwaySeconds)
                });
            }
        }
    }
    allTrips.forEach(trip => {
        const timeSinceStart = currentTimeInSeconds - trip.startTime;
        let cumulativeTime = 0;
        let trainPosition = null;
        const stopsOnLine = lineStops[trip.routeId + '-' + trip.direction];
        if (!stopsOnLine) return;
        for (let i = 0; i < stopsOnLine.length - 1; i++) {
            const fromStopId = stopsOnLine[i];
            const toStopId = stopsOnLine[i + 1];
            const key = `${fromStopId}_${toStopId}`;
            const segmentTravelTime = data.travelTimes[key] || 150;
            if (timeSinceStart >= cumulativeTime && timeSinceStart < cumulativeTime + segmentTravelTime) {
                const progress = (timeSinceStart - cumulativeTime) / segmentTravelTime;
                const path = linePaths[trip.routeId];
                const totalLength = path.getTotalLength();
                const startProportion = i / (stopsOnLine.length - 1);
                const endProportion = (i + 1) / (stopsOnLine.length - 1);
                const currentProportion = startProportion + progress * (endProportion - startProportion);
                trainPosition = path.getPointAtLength(currentProportion * totalLength);
                break;
            }
            cumulativeTime += segmentTravelTime;
        }
        if (trainPosition) {
            let trainElement = document.getElementById(trip.id);
            if (!trainElement) {
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
    requestAnimationFrame(() => animationLoop(data));
}

// --- 6. INITIALIZATION ---
async function main() {
    const data = await loadData();
    preprocessData(data);
    renderMap(data); 
    distributeAndDrawStations();
    requestAnimationFrame(() => animationLoop(data));
}

main();