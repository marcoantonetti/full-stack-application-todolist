CREATE DATABASE todoappDatabase;

CREATE TABLE todos (
	id SERIAL primary key,
	title varchar(100) NOT NULL,
	category varchar(100) NOT NULL, 
	description varchar(250) ,
	completed BOOL DEFAULT FALSE,
	utc timestamp NOT NULL
);


