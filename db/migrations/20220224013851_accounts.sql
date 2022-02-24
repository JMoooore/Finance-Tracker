-- migrate:up
CREATE TABLE accounts(
    id serial PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(100),
    balance MONEY
);

-- migrate:down
DROP TABLE accounts;

