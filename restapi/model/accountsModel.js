import db from './connection.js';

const accountModel = {};

accountModel.getSingleAccount = async (id) => {
    const {rows} = await db.query('SELECT * FROM accounts WHERE id=$1', [id]);
    return rows;
}

accountModel.getAllByUser = async (id) => {
    const { rows } = await db.query('SELECT * FROM accounts WHERE user_id=$1', [
        id,
    ]);
    return rows;
};

accountModel.getAllAccounts = async () => {
    const {rows} = await db.query('SELECT * FROM accounts');
    return rows;
}

accountModel.createNewAccount = async (id, body) => {
    const {balance, name} = body
    const {rows} = await db.query('INSERT INTO accounts (user_id, name, balance) VALUES ($1, $2, $3) RETURNING *', [id, name, balance])
    return rows[0];
}

accountModel.updateAccount = async (account_id, body) => {
    const {balance, name} = body
    const account = await accountModel.getSingleAccount(account_id);
    const updateObj = {
        name: name ?? account[0].name,
        balance: balance ?? account[0].balance
    };
    const {rows} = await db.query(
        'UPDATE accounts SET name=$1, balance=$2 WHERE id=$3 RETURNING *', 
        [
            updateObj.name,
            updateObj.balance,
            account_id
        ]);
    return rows[0];
}

export default accountModel;
