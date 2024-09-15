"""
Insta485 index (main) view.

URLs include:
/
"""
import flask
import mywebsite
import mywebsite.model

@mywebsite.app.route('/classes/', methods=['GET', 'POST'])
def show_classes():
    """Display Classes."""
    # Get connection to database and set is_admin to false
    connection = mywebsite.model.get_db()
    is_admin = False

    # If the username is in a flask session, set admin to true
    if 'username' in flask.session:
        is_admin = True

    # Get class code and class name from classes in database
    cur = connection.execute(
        "SELECT class_code, class_name, description, has_projects "
        "FROM classes",
        ()
    )
    classes = cur.fetchall()

    # For each class in classes, get the projects associated with that class
    for cl in classes:
        cur = connection.execute(
            "SELECT project_id, project_name "
            "FROM projects "
            "WHERE class_code = ? ",
            (cl["class_code"], )
        )

        cl["projects"] = cur.fetchall()

    # Create the context
    context = {"is_admin": is_admin, "classes": classes}

    return flask.render_template("class.html", **context)
