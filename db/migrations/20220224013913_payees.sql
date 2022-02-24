-- migrate:up
CREATE TABLE payees(
    id serial PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(100)
);


-- migrate:down
DROP TABLE payees;

