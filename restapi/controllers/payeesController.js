import payeesModel from '../model/payeesModel.js';

const payeesController = {};

payeesController.getAllByUser = async (req, res) => {
    const data = await payeesModel.getAllByUser(req.params.user_id);
    res.json(data);
};

payeesController.addOne = async (req, res) => {
    const data = await payeesModel.addOne(req.params.user_id, req.body);
    res.json(data);
};

payeesController.changeOne = async (req, res) => {
    const data = await payeesModel.changeOne(req.params.payee_id, req.body);
    res.json(data);
};

payeesController.deleteOne = async (req, res) => {
    const data = await payeesModel.deleteOne(req.params.payee_id);
    res.json(data);
};

export default payeesController;
