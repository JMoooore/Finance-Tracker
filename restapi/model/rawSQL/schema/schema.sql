\c sdc

CREATE TABLE users(
	id serial PRIMARY KEY,
	first_name VARCHAR(255),
	last_name VARCHAR(255),
	password VARCHAR(255),
	email VARCHAR(255)
);

CREATE TABLE accounts(
	id serial PRIMARY KEY,
	user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
	name VARCHAR(100),
	balance MONEY
);

CREATE TABLE payees(
	id serial PRIMARY KEY,
	user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
	name VARCHAR(100)
);

CREATE TABLE categories(
	id serial PRIMARY KEY,
	user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
	name VARCHAR(100)
);

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

\i model/rawSQL/seed/seed.sql;