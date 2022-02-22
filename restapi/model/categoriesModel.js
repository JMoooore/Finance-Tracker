import db from './connection.js';

const categoriesModel = {};

categoriesModel.getAll = async () => {
    const { rows } = await db.query('SELECT * FROM categories');
    return rows;
};

categoriesModel.getOne = async (id) => {
    const { rows } = await db.query('SELECT * FROM categories WHERE id=$1', [
        id,
    ]);
    return rows;
};

categoriesModel.createOne = async (body) => {
    const { user_id, name } = body;
    const { rows } = await db.query(
        'INSERT INTO categories (user_id, name) VALUES ($1, $2) RETURNING *',
        [user_id, name]
    );
    return rows[0];
};

categoriesModel.updateOne = async (id, body) => {
    const { user_id, name } = body;
    const category = await categoriesModel.getOne(id);
    const updateObj = {
        user_id: user_id ?? category[0].user_id,
        name: name ?? category[0].name,
    };
    const { rows } = await db.query(
        'UPDATE categories SET user_id=$1, name=$2 WHERE id=$3 RETURNING *',
        [updateObj.user_id, updateObj.name, id]
    );
    return rows[0];
};

categoriesModel.removeOne = async (id) => {
    const { rows } = await db.query(
        'DELETE FROM categories WHERE id = $1 RETURNING *',
        [id]
    );
    return rows[0];
};

export default categoriesModel;
