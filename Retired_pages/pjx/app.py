from flask import Flask, render_template, request, redirect, url_for, send_file
import csv
from datetime import datetime
import io

app = Flask(__name__)
CSV_FILE = 'transactions.csv'

# Ensure CSV file has headers on the first run
try:
    with open(CSV_FILE, mode='x', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['Date', 'Purpose', 'Time', 'Amount'])
except FileExistsError:
    pass

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit_transaction():
    date = request.form['date']
    purpose = request.form['purpose']
    time = request.form['time']
    amount = request.form['amount']

    with open(CSV_FILE, mode='a', newline='') as file:
        writer = csv.writer(file)
        writer.writerow([date, purpose, time, amount])

    return redirect(url_for('index'))

@app.route('/download')
def download_last_five():
    # Read the last 5 rows from the CSV file
    with open(CSV_FILE, mode='r') as file:
        reader = list(csv.reader(file))
        last_five = reader[-5:] if len(reader) > 1 else reader  # Include headers if the file has only them

    # Create a CSV file in memory
    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerows(last_five)
    output.seek(0)

    # Send the file to the user
    return send_file(
        io.BytesIO(output.getvalue().encode('utf-8')),
        mimetype='text/csv',
        as_attachment=True,
        download_name='last_5_transactions.csv'
    )

if __name__ == '__main__':
    app.run(debug=True)
