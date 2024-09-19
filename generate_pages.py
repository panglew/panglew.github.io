#!/usr/bin/env python3

import json
import os
from jinja2 import Environment, FileSystemLoader

# Load JSON data from file
with open('data.json', 'r') as f:
    all_data = json.load(f)

# Setup Jinja2 environment and load template
env = Environment(loader=FileSystemLoader('.'))
template = env.get_template('templates/projects.html')
project_info_template = env.get_template('templates/project.html')

# Output directory for HTML files
project_dir = 'html_output'
project_info_dir = 'projects'

# Generate HTML files for each table
for table_name, rows in all_data.items():
    if table_name == 'classes':
        # Render HTML content using the projects template
        html_content = template.render(classes=rows)
        
        # Write the HTML content to a projects.html file
        file_path = os.path.join(project_dir, 'projects.html')
        with open(file_path, 'w') as f:
            f.write(html_content)

        # Generate individual HTML files for each project in each class
        for cl in rows:
            for project in cl['projects']:
                project_id = project['project_id']
                project_file_name = f'{project_id}.html'
                project_html_content = project_info_template.render(project_data=project)
                project_file_path = os.path.join(project_info_dir, project_file_name)
                with open(project_file_path, 'w') as f:
                    f.write(project_html_content)


print("HTML files have been generated.")
