/* schema sql file */
PRAGMA foreign_keys = ON;

CREATE TABLE admins
(
    username VARCHAR (20) NOT NULL,
    password VARCHAR (256) NOT NULL,

    PRIMARY KEY (username)
);

/*  Classes */
CREATE TABLE classes
(
    class_code VARCHAR(22) NOT NULL,
    class_name VARCHAR(80) NOT NULL,
    description VARCHAR(1024) NOT NULL,
    has_projects VARCHAR(1) NOT NULL,

	PRIMARY KEY(class_code)
);


/*  Projects */
CREATE TABLE projects
(
    project_id VARCHAR(10) NOT NULL,
    project_name VARCHAR(64) NOT NULL,
    text VARCHAR(1024) NOT NULL,
    langauges_and_tools VARCHAR(64) NOT NULL,
    class_code VARCHAR(22),

	PRIMARY KEY (project_id),
    FOREIGN KEY (class_code) REFERENCES classes(class_code) ON DELETE CASCADE
);


/*  Project Files */
CREATE TABLE project_files
(
    file_id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_id INTEGER NOT NULL,
    filename VARCHAR(64) NOT NULL,

    FOREIGN KEY (project_id) REFERENCES projects(project_id) ON DELETE CASCADE
);


/*  Fragrances */
CREATE TABLE fragrances
(
    name VARCHAR(50) NOT NULL,
    filename VARCHAR(64) NOT NULL,
    rating INTEGER NOT NULL,
	
    PRIMARY KEY(name)
);
