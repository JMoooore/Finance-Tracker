-- migrate:up
CREATE TABLE users(
    id serial PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255)
);


-- migrate:down
DROP TABLE users;

