import db from './connection.js';

const accountsModel = {};

accountsModel.getOne = async (id) => {
    const { rows } = await db.query('SELECT * FROM accounts WHERE id=$1', [id]);
    return rows;
};

accountsModel.getAllByUser = async (id) => {
    const { rows } = await db.query('SELECT * FROM accounts WHERE user_id=$1', [
        id,
    ]);
    return rows;
};

accountsModel.addOne = async (id, body) => {
    const { balance, name } = body;
    const { rows } = await db.query(
        'INSERT INTO accounts (user_id, name, balance) VALUES ($1, $2, $3) RETURNING *',
        [id, name, balance]
    );
    return rows[0];
};

accountsModel.changeOne = async (id, body) => {
    const { balance, name } = body;
    const account = await accountsModel.getOne(id);
    const updateObj = {
        name: name ?? account[0].name,
        balance: balance ?? account[0].balance,
    };
    const { rows } = await db.query(
        'UPDATE accounts SET name=$1, balance=$2 WHERE id=$3 RETURNING *',
        [updateObj.name, updateObj.balance, id]
    );
    return rows[0];
};

accountsModel.deleteOne = async (id) => {
    const { rows } = await db.query(
        'DELETE FROM accounts WHERE id=$1 RETURNING *',
        [id]
    );
    return rows[0];
};

export default accountsModel;
