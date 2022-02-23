import transModel from '../model/transModel.js';

const transactionsController = {};

transactionsController.getAll = async (req, res) => {
    const data = await transModel.getAll(req.params.user_id);
    res.json(data);
};

transactionsController.removeOne = async (req, res) => {
    const data = await transModel.removeOne(req.params.transaction_id);
    res.json(data);
};

transactionsController.createOne = async (req, res) => {
    const data = await transModel.createOne(req.params.user_id, req.body);
    res.json(data);
};

transactionsController.updateOne = async (req, res) => {
    const data = await transModel.updateOne(
        req.params.transaction_id,
        req.body
    );
    res.json(data);
};

export default transactionsController;
