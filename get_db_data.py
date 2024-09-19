#!/usr/bin/env python3

import sqlite3
import json

# Connect to the SQLite3 database
conn = sqlite3.connect('./var/db.sqlite3')
cursor = conn.cursor()

# Retrieve all table names in the database
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = cursor.fetchall()

# Dictionary to hold all data
all_data = {}

# Iterate over each table
for (table_name,) in tables:
    # Query to select all data from the table
    cursor.execute(f"SELECT * FROM {table_name}")
    
    # Fetch all rows from the table
    rows = cursor.fetchall()
    
    # Get column names
    columns = [description[0] for description in cursor.description]
    
    # Convert rows to a list of dictionaries
    data = [dict(zip(columns, row)) for row in rows]
    
    # Add table data to the dictionary
    all_data[table_name] = data

# Convert the dictionary to JSON
json_data = json.dumps(all_data, indent=4)

# Write the JSON data to a file
with open('data.json', 'w') as f:
    f.write(json_data)

# Close the connection
conn.close()
