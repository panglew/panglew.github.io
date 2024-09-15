"""Projects.py"""
from flask import render_template, request, redirect, url_for, session
import mywebsite
import mywebsite.model

@mywebsite.app.route('/classes/<project_id_slug>/', methods=['GET', 'POST'])
def show_project(project_id_slug):
    """Display or Edit Class Project."""
    # Get connection to database and set is_admin to false
    connection = mywebsite.model.get_db()
    is_admin = True

    # If the username is in a flask session, set admin to true
    if 'username' in session:
        is_admin = True

    if request.method == 'POST':
        # Prepare update query and parameters for the projects table
        project_query = "UPDATE projects SET "
        project_params = []

        if 'project_name' in request.form:
            project_query += "project_name=?,"
            project_params.append(request.form['project_name'])

        if 'text' in request.form:
            project_query += "text=?,"
            project_params.append(request.form['text'])

        if 'languages_and_tools' in request.form:
            project_query += "languages_and_tools=?,"
            project_params.append(request.form['languages_and_tools'])

        # Remove trailing comma and add WHERE clause
        project_query = project_query.rstrip(',') + " WHERE project_id=?"
        project_params.append(project_id_slug)

        # Execute the update query for the projects table
        connection.execute(project_query, project_params)

        # Handle image upload and update project_files table
        image = request.files['image']
        if image and image.filename:
            filename = mywebsite.model.gen_filename(image.filename)
            mywebsite.model.upload_file(filename, image)

            # Insert or update the file entry in project_files
            descriptor = request.form.get('image_text', '')
            connection.execute(
                "INSERT INTO project_files (project_id, descriptor, filename) VALUES (?, ?, ?) "
                "ON CONFLICT(filename) DO UPDATE SET descriptor=excluded.descriptor, project_id=excluded.project_id",
                (project_id_slug, descriptor, filename)
            )

        # Handle external link and update project_links table
        if 'external_link' in request.form and request.form['external_link']:
            external_link = request.form['external_link']
            connection.execute(
                "INSERT INTO project_links (project_id, url) VALUES (?, ?) "
                "ON CONFLICT(url) DO UPDATE SET project_id=excluded.project_id",
                (project_id_slug, external_link)
            )

        # Commit all changes
        connection.commit()

        return redirect(url_for('show_classes'))  # Redirect user after form submission

    # Fetch project data for the given project_id_slug
    cur = connection.execute(
        "SELECT * FROM projects WHERE project_id = ?", 
        (project_id_slug, )
    )
    project_data = cur.fetchone()  # Fetch one record matching the project_id_slug

    context = {"is_admin": is_admin, "project_data": project_data}

    return render_template("project.html", **context)