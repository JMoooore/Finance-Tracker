INSERT INTO users (first_name, last_name, email, password) VALUES ('John', 'Moore', 'jm@email.com', '1234');
INSERT INTO users (first_name, last_name, email, password) VALUES ('Paul', 'Devlin', 'pd@email.com', '1234');
INSERT INTO users (first_name, last_name, email, password) VALUES ('Fernando', 'Curiel', 'fc@email.com', '1234');
INSERT INTO users (first_name, last_name, email, password) VALUES ('Isaias', 'Nuno', 'in@email.com', '1234');
INSERT INTO users (first_name, last_name, email, password) VALUES ('Kevin', 'Heleodoro', 'kh@email.com', '1234');
INSERT INTO users (first_name, last_name, email, password) VALUES ('Nick', 'Rafaelle', 'nr@email.com', '1234');

INSERT INTO accounts (user_id, name, balance) VALUES (1, 'wallet', 1000);
INSERT INTO accounts (user_id, name, balance) VALUES (2, 'wallet', 2000);
INSERT INTO accounts (user_id, name, balance) VALUES (3, 'wallet', 3000);
INSERT INTO accounts (user_id, name, balance) VALUES (4, 'wallet', 500);
INSERT INTO accounts (user_id, name, balance) VALUES (5, 'wallet', 100);
INSERT INTO accounts (user_id, name, balance) VALUES (6, 'wallet', 100000);

INSERT INTO categories (user_id, name) VALUES (1, 'Food');
INSERT INTO categories (user_id, name) VALUES (2, 'Clothes');
INSERT INTO categories (user_id, name) VALUES (3, 'Supplements');
INSERT INTO categories (user_id, name) VALUES (4, 'School');
INSERT INTO categories (user_id, name) VALUES (5, 'Bills');
INSERT INTO categories (user_id, name) VALUES (6, 'Rent');

INSERT INTO payees (user_id, name) VALUES (1, 'Walmart');
INSERT INTO payees (user_id, name) VALUES (2, 'Costco');
INSERT INTO payees (user_id, name) VALUES (3, 'Target');
INSERT INTO payees (user_id, name) VALUES (4, 'USAA');
INSERT INTO payees (user_id, name) VALUES (5, 'Galvanize');
INSERT INTO payees (user_id, name) VALUES (6, 'Academy');
INSERT INTO payees (user_id, name) VALUES (1, 'HEB');

INSERT INTO transactions (user_id, category_id, payee_id, account_id, outflow, inflow, note) VALUES (1,1,1,1,100,0,'');
INSERT INTO transactions (user_id, category_id, payee_id, account_id, outflow, inflow, note) VALUES (2,2,2,2,200,0,'');
INSERT INTO transactions (user_id, category_id, payee_id, account_id, outflow, inflow, note) VALUES (3,3,3,3,300,0,'');
INSERT INTO transactions (user_id, category_id, payee_id, account_id, outflow, inflow, note) VALUES (4,4,4,4,400,0,'');
INSERT INTO transactions (user_id, category_id, payee_id, account_id, outflow, inflow, note) VALUES (5,5,5,5,500,0,'');
INSERT INTO transactions (user_id, category_id, payee_id, account_id, outflow, inflow, note) VALUES (6,6,6,6,600,0,'');
