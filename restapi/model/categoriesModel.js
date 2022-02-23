import db from './connection.js';

const categoriesModel = {};

categoriesModel.getAll = async (user_id) => {
    const { rows } = await db.query('SELECT * FROM categories WHERE user_id=$1', [user_id]);
    return rows;
};

categoriesModel.addOne = async (user_id, body) => {
    const {name} = body
    const { rows } = await db.query('INSERT INTO categories (user_id, name) VALUES ($1, $2) RETURNING id',
    [user_id, name]);
    return rows;
};

categoriesModel.removeOne = async (category_id) => {
    const { rows } = await db.query(
        'DELETE FROM categories WHERE id = $1 RETURNING id',
        [category_id]
    );
    return rows[0];
};

categoriesModel.updateOne = async (category_id, body) => {
    const { name } = body;
    const { rows } = await db.query(
        'UPDATE categories SET name=$1 WHERE id=$2 RETURNING id',
        [name, category_id]
    );
    return rows;
};

export default categoriesModel;
