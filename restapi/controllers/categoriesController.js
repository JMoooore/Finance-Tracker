import categoriesModel from '../model/categoriesModel.js';

const categoriesController = {};

categoriesController.getAll = async (req, res) => {
    const data = await categoriesModel.getAll(req.params.user_id);
    res.json(data);
};

categoriesController.addOne = async (req, res) => {
    const data = await categoriesModel.addOne(req.params.user_id, req.body);
    res.json(data);
};

categoriesController.removeOne = async (req, res) => {
    const data = await categoriesModel.removeOne(req.params.category_id);
    res.json(data);
};

categoriesController.updateOne = async (req, res) => {
    const data = await categoriesModel.updateOne(
        req.params.category_id,
        req.body
    );
    res.json(data);
};

export default categoriesController;
