import categoriesModel from '../model/categoriesModel.js';

const categoriesController = {};

categoriesController.getAll = async (req, res) => {
    const data = await categoriesModel.getAll();
    res.json(data);
};

categoriesController.getOne = async (req, res) => {
    const data = await categoriesModel.getOne(req.params.id);
    res.json(data);
};

categoriesController.createOne = async (req, res) => {
    const data = await categoriesModel.createOne(req.body);
    res.json(data);
};

categoriesController.updateOne = async (req, res) => {
    const data = await categoriesModel.updateOne(req.params.id, req.body);
    res.json(data);
};

categoriesController.removeOne = async (req, res) => {
    const data = await categoriesModel.removeOne(req.params.id);
    res.json(data);
};

export default categoriesController;
