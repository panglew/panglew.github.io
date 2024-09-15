"""Projects.py"""
from flask import Blueprint, render_template
from app.models import Project

projects_bp = Blueprint('projects', __name__)

@projects_bp.route('/projects')
def all_projects():
    """Function for projects."""
    projects = Project.query.all()
    return render_template('projects.html', projects=projects)

@projects_bp.route('/projects/<int:project_id>')
def project_detals(project_id):
    """Function for individual projects."""
    project = Project.query.get_or_404(project_id)
    return render_template('project.html', project=project)
