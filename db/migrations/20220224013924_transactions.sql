-- migrate:up
CREATE TABLE transactions(
    id serial PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    payee_id INT REFERENCES payees(id) ON DELETE CASCADE,
    account_id INT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
    category_id INT REFERENCES categories(id) ON DELETE CASCADE,
    date DATE DEFAULT now(),
    inflow MONEY,
    outflow MONEY,
    note TEXT
);

-- migrate:down
DROP TABLE transactions;

