import accountsModel from '../model/accountsModel.js';

const accountsController = {};

accountsController.getAllByUser = async (req, res) => {
    const data = await accountsModel.getAllByUser(req.params.user_id);
    res.json(data);
};

accountsController.addOne = async (req, res) => {
    const data = await accountsModel.addOne(req.params.user_id, req.body);
    res.json(data);
};

accountsController.changeOne = async (req, res) => {
    const data = await accountsModel.updateOne(req.params.account_id, req.body);
    res.json(data);
};

accountsController.deleteOne = async (req, res) => {
    const data = await accountsModel.deleteOne(req.params.account_id);
    res.json(data);
};

export default accountsController;
