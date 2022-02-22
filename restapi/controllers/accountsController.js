import accountModel from '../model/accountsModel.js';

const accountController = {};

accountController.getAllAccounts = async (req, res) => {
    const data = await accountModel.getAllAccounts();
    res.json(data);
};

accountController.getAllByUser = async (req, res) => {
    const data = await accountModel.getAllByUser(req.params.user_id);
    res.json(data);
};

accountController.createNewAccount = async (req, res) => {
    const data = await accountModel.createNewAccount(
        req.params.user_id,
        req.body
    );
    res.json(data);
};

accountController.updateOneAccount = async (req, res) => {
    const data = await accountModel.updateOneAccount(
        req.params.account_id,
        req.body
    );
    res.json(data);
};

accountController.deleteOneAccount = async (req, res) => {
    const data = await accountModel.deleteOneAccount(req.params.account_id);
    res.json(data);
};

export default accountController;
