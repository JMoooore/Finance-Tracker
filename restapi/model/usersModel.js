import db from './connection.js';

const userModel = {};

userModel.getAll = async () => {
    const { rows } = await db.query('SELECT * FROM users');
    return rows;
};

userModel.getOne = async (id) => {
    const { rows } = await db.query('SELECT * FROM users WHERE id=$1', [id]);
    return rows;
};

userModel.createOne = async (body) => {
    const { first_name, last_name, email, password } = body;
    const { rows } = await db.query(
        'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
        [first_name, last_name, email, password]
    );
    return rows[0];
};

userModel.updateOne = async (id, body) => {
    const { first_name, last_name, email, password } = body;
    const user = await userModel.getOne(id);
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
        ]);
    return rows[0];
};

userModel.removeOne = async (id) => {
    const { rows } = await db.query(
        'DELETE FROM users WHERE id = $1 RETURNING *',
        [id]
    );
    return rows[0];
};

export default userModel;
