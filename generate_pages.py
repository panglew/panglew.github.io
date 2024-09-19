#!/usr/bin/env python3

import json
import os
from jinja2 import Environment, FileSystemLoader

# Load JSON data from file
with open('data.json', 'r') as f:
    all_data = json.load(f)

# Setup Jinja2 environment and load template
env = Environment(loader=FileSystemLoader('.'))
template = env.get_template('/templates/projects.html')

# Output directory for HTML files
output_dir = 'html_output'
os.makedirs(output_dir, exist_ok=True)

# Generate HTML files for each table
for table_name, rows in all_data.items():
    # Check if the table is for classes
    if table_name == 'classes':
        # Render HTML content using the template
        html_content = template.render(classes=rows)
        
        # Write the HTML content to a file
        file_path = os.path.join(output_dir, f'projects.html')
        with open(file_path, 'w') as f:
            f.write(html_content)

print("HTML files have been generated.")
