"""
Insta485 index (main) view.

URLs include:
/
"""
import flask
import mywebsite
import mywebsite.model

@mywebsite.app.route('/')
def show_index():
    """Display Index."""
    # Get connection to database and set is_admin to false
    connection = mywebsite.model.get_db()
    is_admin = False

    # If the username is in a flask session, set admin to true
    if 'username' in flask.session:
        is_admin = True

    # Get class code and class name from classes in database
    cur = connection.execute(
        "SELECT class_code, class_name, has_projects "
        "FROM classes",
        ()
    )
    classes = cur.fetchall()

    # Create the context
    context = {}
    context["is_admin"] = is_admin
    context["classes"] = classes

    return flask.render_template("index.html", **context)
