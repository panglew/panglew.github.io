"""File to display fragrances.py"""
import flask
import mywebsite
import mywebsite.model

@mywebsite.app.route('/fragrances/')
def show_fragrances():
    """Function for fragrances."""
    return flask.render_template('fragrance.html')
