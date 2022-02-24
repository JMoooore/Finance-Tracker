import transactionsModel from '../model/transactionsModel.js';

const transactionsController = {};

transactionsController.getAllByUser = async (req, res) => {
    const data = await transactionsModel.getAllByUser(req.params.user_id);
    res.json(data);
};

transactionsController.addOne = async (req, res) => {
    const data = await transactionsModel.addOne(req.params.user_id, req.body);
    res.json(data);
};

transactionsController.changeOne = async (req, res) => {
    const data = await transactionsModel.changeOne(
        req.params.transaction_id,
        req.body
    );
    res.json(data);
};

transactionsController.deleteOne = async (req, res) => {
    const data = await transactionsModel.deleteOne(req.params.transaction_id);
    res.json(data);
};

export default transactionsController;
