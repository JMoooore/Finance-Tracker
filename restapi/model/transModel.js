import db from './connection.js';

const transModel = {};

transModel.removeOne = async (transaction_id) => {
    const { rows } = await db.query(
        'DELETE FROM transactions WHERE id=$1 RETURNING id',
        [transaction_id]
    );
    return rows;
};

transModel.createOne = async (user_id, body) => {
    const { category_id, payee_id, account_id, outflow, inflow, note } = body;
    const { rows } = await db.query(
        'INSERT INTO transactions (user_id, category_id, payee_id, account_id, outflow, inflow, note) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',
        [user_id, category_id, payee_id, account_id, outflow, inflow, note]
    );
    return rows;
};

transModel.updateOne = async (transaction_id, body) => {
    const { category_id, payee_id, account_id, outflow, inflow, note } = body;
    const { rows } = await db.query('SELECT * FROM transactions WHERE id=$1', [
        transaction_id,
    ]);
    const oldTrans = rows[0];
    const newTrans = {
        category_id: category_id ?? oldTrans.category_id,
        payee_id: payee_id ?? oldTrans.payee_id,
        account_id: account_id ?? oldTrans.account_id,
        outflow: outflow ?? oldTrans.outflow,
        inflow: inflow ?? oldTrans.inflow,
        note: note ?? oldTrans.note,
    };
    const data = await db.query(
        'UPDATE transactions SET category_id=$1, payee_id=$2, account_id=$3, outflow=$4, inflow=$5, note=$6 WHERE id=$7 RETURNING *',
        [
            newTrans.category_id,
            newTrans.payee_id,
            newTrans.account_id,
            newTrans.outflow,
            newTrans.inflow,
            newTrans.note,
            transaction_id,
        ]
    );
    return data.rows;
};

transModel.getAll = async (user_id) => {
    const { rows } = await db.query(
        'SELECT * FROM transactions WHERE user_id=$1',
        [user_id]
    );
    return rows;
};

export default transModel;
