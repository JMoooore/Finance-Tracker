import db from './connection.js';

const accountModel = {};

accountModel.getAllByUser = async (id) => {
    const { rows } = await db.query('SELECT * FROM accounts WHERE user_id=$1', [
        id,
    ]);
    return rows;
};

accountModel.createNewAccount = async (id, body) => {
    const {balance, name} = body
    const {rows} = await db.query('INSERT INTO accounts (user_id, name, balance) VALUES ($1, $2, $3) RETURNING *', [id, name, balance])
    return rows[0];
}

export default accountModel;
