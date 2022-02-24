import db from './connection.js';
import bcryptjs from 'bcryptjs';

const usersModel = {};

usersModel.getAll = async () => {
    const { rows } = await db.query('SELECT * FROM users');
    delete rows[0].password;
    return rows;
};

usersModel.getOne = async (id) => {
    const { rows } = await db.query('SELECT * FROM users WHERE id=$1', [id]);
    delete rows[0].password;
    return rows;
};

usersModel.getFullData = async (id) => {
    const { rows } = await db.query(
        'SELECT t.id as transaction_id, t.user_id, t.payee_id, t.account_id, t.category_id, t.date, t.inflow, t.outflow, t.note, p.name AS payee_name, c.name AS category_name, a.name AS account_name, a.balance AS account_balance FROM transactions t INNER JOIN payees AS p ON p.id = t.payee_id INNER JOIN categories AS c ON c.id = t.category_id INNER JOIN accounts AS a ON a.id = t.account_id WHERE t.user_id = $1',
        [id]
    );
    return rows;
};

usersModel.createOne = async (body) => {
    const { first_name, last_name, email, password } = body;

    const hashedPassword = await bcryptjs.hash(password, 10);

    const { rows } = await db.query(
        'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
        [first_name, last_name, email, hashedPassword]
    );
    delete rows[0].password;
    return rows;
};

usersModel.login = async (body) => {
    const { email, password } = body;
    const { rows } = await db.query('SELECT * FROM users WHERE email=$1', [
        email,
    ]);

    if (rows.length && rows[0].email === email) {
        if (await bcryptjs.compare(password, rows[0].password)) {
            delete rows[0].password;
            return rows;
        }
    }
    return undefined;
};

usersModel.updateOne = async (id, body) => {
    const { first_name, last_name, email, password } = body;
    const user = await usersModel.getOne(id);
    const updateObj = {
        first_name: first_name ?? user[0].first_name,
        last_name: last_name ?? user[0].last_name,
        email: email ?? user[0].email,
        password: password ?? user[0].password,
    };
    const { rows } = await db.query(
        'UPDATE users SET first_name=$1, last_name=$2, email=$3, password=$4 WHERE id=$5 RETURNING *',
        [
            updateObj.first_name,
            updateObj.last_name,
            updateObj.email,
            updateObj.password,
            id,
        ]
    );
    return rows[0];
};

usersModel.removeOne = async (id) => {
    const { rows } = await db.query(
        'DELETE FROM users WHERE id = $1 RETURNING *',
        [id]
    );
    return rows[0];
};

export default usersModel;
