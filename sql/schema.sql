/* schema sql file */
PRAGMA foreign_keys = ON;

/*  Classes */
CREATE TABLE classes
(
    class_code VARCHAR(16) NOT NULL,
    class_name VARCHAR(40) NOT NULL,
    description VARCHAR(1024) NOT NULL, 
    created DATETIME default CURRENT_TIMESTAMP,

	PRIMARY KEY(class_code)
);


/*  Projects */
CREATE TABLE projects
(
    project_id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_name VARCHAR(64) NOT NULL;
    text VARCHAR(1024) NOT NULL,
    created DATETIME default CURRENT_TIMESTAMP,
    class_code VARCHAR(16),

	PRIMARY KEY (class_code) REFERENCES classes(class_code) ON DELETE CASCADE
);


/*  Project Files */
CREATE TABLE project_files
(
    file_id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_id INTEGER NOT NULL,
    filename VARCHAR(64) NOT NULL,
    created DATETIME default CURRENT_TIMESTAMP,

    FOREIGN KEY (project_id) REFERENCES projects(project_id) ON DELETE CASCADE
);


/*  Fragrances */
CREATE TABLE fragrances
(
    name VARCHAR(50) NOT NULL,
    rating INTEGER NOT NULL,
	created DATETIME default CURRENT_TIMESTAMP,
	
    PRIMARY KEY(name)
);
