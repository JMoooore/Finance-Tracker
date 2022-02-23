import transModel from '../model/transModel.js';

const transactionsController = {};

transactionsController.removeOne = async (req, res) => {
    const data = await transModel.removeOne(req.params.id);
    res.json(data);
};

transactionsController.createOne = async (req, res) => {
    const data = await transModel.createOne(req.body);
    res.json(data);
};

transactionsController.updateOne = async (req, res) => {
    const data = await transModel.updateOne(req.params.id, req.body);
    res.json(data);
};

transactionsController.getAll = async (req, res) => {
    const data = await transModel.getAll();
    res.json(data);
};

export default transactionsController;
