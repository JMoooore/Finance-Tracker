import db from './connection.js';

const transModel = {};

transModel.removeOne = async (id) => {
    const { rows } = await db.query(
        'DELETE FROM transactions WHERE id=$1 RETURNING *',
        [id]
    );
    return rows;
};

transModel.createOne = async (body) => {
    const {
        user_id,
        category_id,
        payee_id,
        account_id,
        outflow,
        inflow,
        note,
    } = body;
    const data = await db.query(
        'INSERT INTO transactions (user_id, category_id, payee_id, account_id, outflow, inflow, note) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',
        [user_id, category_id, payee_id, account_id, outflow, inflow, note]
    );
    return data.rows;
};

transModel.updateOne = async (id, body) => {
    const { category_id, payee_id, account_id, outflow, inflow, note } = body;
    const { rows } = await db.query('SELECT * FROM transactions WHERE id=$1', [
        id,
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
    const newData = await db.query(
        'UPDATE transactions SET category_id=$1, payee_id=$2, account_id=$3, outflow=$4, inflow=$5, note=$6 WHERE id=$7 RETURNING *',
        [
            newTrans.category_id,
            newTrans.payee_id,
            newTrans.account_id,
            newTrans.outflow,
            newTrans.inflow,
            newTrans.note,
            id,
        ]
    );
    return newData.rows;
};

transModel.getAll = async () => {
    const { rows } = await db.query('SELECT * FROM transactions');
    return rows;
};

export default transModel;
