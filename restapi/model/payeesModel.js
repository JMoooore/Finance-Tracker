import db from './connection.js';

const payeesModel = {};

payeesModel.getAllByUser = async (user_id) => {
    const { rows } = await db.query('SELECT * FROM payees WHERE user_id=$1', [
        user_id,
    ]);
    return rows;
};

payeesModel.addOne = async (user_id, body) => {
    const { name } = body;
    const { rows } = await db.query(
        'INSERT INTO payees (user_id, name) VALUES ($1, $2) RETURNING id',
        [user_id, name]
    );
    return rows;
};

payeesModel.deleteOne = async (payee_id) => {
    const { rows } = await db.query(
        'DELETE FROM payees WHERE id = $1 RETURNING id',
        [payee_id]
    );
    return rows;
};

payeesModel.changeOne = async (payee_id, body) => {
    const { name } = body;
    const { rows } = await db.query(
        'UPDATE payees SET name = $1 WHERE id = $2 RETURNING id',
        [name, payee_id]
    );
    return rows;
};

export default payeesModel;
