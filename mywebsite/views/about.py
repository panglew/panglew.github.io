"""File to display home.py"""
import flask
import mywebsite
import mywebsite.config
import mywebsite.model

CONTENT_FILE = 'content.json'

@mywebsite.app.route('/about/', methods=['GET', 'POST'])
def show_about():
    """Function for about."""
    content = mywebsite.model.load_content(mywebsite.app.config["JSON_FOLDER"]/'about.json')
    is_admin = 'username' in flask.session

    if flask.request.method == 'POST' and is_admin:
        # Update content if user is admin and it's a POST request
        about_text = flask.request.form['about_text']
        page_title = flask.request.form['page_title']
        content['about_text'] = about_text
        content['page_title'] = page_title
        mywebsite.model.save_content(mywebsite.app.config["JSON_FOLDER"]/'about.json', content)

    context = {
        'about_text': content['about_text'],
        'page_title': content['page_title'],
        'is_admin': is_admin
    }
    return flask.render_template('about.html', **context)
