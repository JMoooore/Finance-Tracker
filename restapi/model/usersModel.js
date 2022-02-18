import db from './connection.js';

const userModel = {};

userModel.getAll = async () => {
    const { rows } = await db.query('SELECT * FROM users');
    return rows
};

userModel.getOne = async (id) => {
    const { rows } = await db.query('SELECT * FROM users WHERE id=$1', [id]);
    return rows;
};

export default userModel;
