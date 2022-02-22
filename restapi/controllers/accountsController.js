import accountModel from "../model/accountsModel.js";

const accountController = {};

accountController.getAllAccounts = async (req, res) => {
    const data = await accountModel.getAllAccounts();
    res.json(data)
}

accountController.getAllByUser = async (req, res) => {
    const data = await accountModel.getAllByUser(req.params.user_id);
    res.json(data);
};

accountController.createNewAccount = async (req, res) => {
    const data = await accountModel.createNewAccount(req.params.user_id, req.body);
    res.json(data);
}

accountController.updateAccount = async (req, res) => {
    const data = await accountModel.updateAccount(req.params.account_id, req.body);
    res.json(data);
}

export default accountController;
