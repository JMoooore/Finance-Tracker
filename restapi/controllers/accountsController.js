import accountModel from "../model/accountsModel.js";

const accountController = {};

accountController.getAllByUser = async (req, res) => {
    const data = await accountModel.getAllByUser(req.params.id);
    res.json(data);
};

accountController.createNewAccount = async (req, res) => {
    const data = await accountModel.createNewAccount(req.params.id, req.body);
    res.json(data);
}

export default accountController;
