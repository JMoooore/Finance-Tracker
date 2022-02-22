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

// userModel.patch = async (body) => {
//     const { first_name, last_name, email, password } = body;
//     await db.query(

//     )
// }

userModel.delete = async (id) => {
    await db.query('DELETE FROM users WHERE id = $1', [id]);
    return { message: `User #${id} Deleted` };
};

export default userModel;
