import db from './connection.js';

const accountModel = {};

accountModel.getAllByUser = async (id) => {
    const { rows } = await db.query('SELECT * FROM accounts WHERE user_id=$1', [
        id,
    ]);
    return rows;
};

export default accountModel;
