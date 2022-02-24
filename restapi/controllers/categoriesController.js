import categoriesModel from '../model/categoriesModel.js';

const categoriesController = {};

categoriesController.getAllByUser = async (req, res) => {
    const data = await categoriesModel.getAllByUser(req.params.user_id);
    res.json(data);
};

categoriesController.addOne = async (req, res) => {
    const data = await categoriesModel.addOne(req.params.user_id, req.body);
    res.json(data);
};

categoriesController.changeOne = async (req, res) => {
    const data = await categoriesModel.changeOne(
        req.params.category_id,
        req.body
    );
    res.json(data);
};

categoriesController.deleteOne = async (req, res) => {
    const data = await categoriesModel.deleteOne(req.params.category_id);
    res.json(data);
};

export default categoriesController;
