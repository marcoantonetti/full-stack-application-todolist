CREATE DATABASE todoappDatabase;

CREATE TABLE todos (
	id BIGINT(92233720368547758) primary key,
	title varchar(100) NOT NULL,
	category varchar(100) NOT NULL, 
	description varchar(250) ,
	completed BOOL DEFAULT FALSE
);

CREATE TABLE users (
	email char(250) primary key,
	hashed_password CHAR(255)
)
-- CREATE TABLE category (
-- 	id serial primary key,
-- 	name varchar(250) NOT NULL
-- );

-- CREATE TABLE task (
-- 	id serial primary key,
-- 	description varchar(250) NOT NULL,
-- 	created DATE DEFAULT CURRENT_DATE,
-- 	due DATE,
-- 	complete BOOL DEFAULT FALSE,
-- 	category_id int NOT NULL REFERENCES category 
-- );