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

userModel.post = async (body) => {
    const { first_name, last_name, email, password } = body;
    await db.query(
        'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)',
        [first_name, last_name, email, password]
    );
    return { message: 'New User Added' };
};

userModel.patch = async (id, body) => {
    const { first_name, last_name, email, password } = body;
    const { rows } = await userModel.getOne(id);
    const user = rows[0];
    const updateObj = {
        first_name: first_name || user.first_name,
        last_name: last_name || user.last_name,
        email: email || user.email,
        password: password || user.password,
    };
    await db.query(
        'UPDATE users SET first_name=$1, last_name=$2, email=$3, password=$4 WHERE id=$5',
        [
            updateObj.first_name,
            updateObj.last_name,
            updateObj.email,
            updateObj.password,
            id,
        ]
    );
    return { message: `User #${id} Updated` };
};

userModel.delete = async (id) => {
    await db.query('DELETE FROM users WHERE id = $1', [id]);
    return { message: `User #${id} Deleted` };
};

export default userModel;
