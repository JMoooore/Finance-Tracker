import accountModel from '../model/accountsModel';

const accountController = {};

accountController.getAllByUser = async (req, res) => {
    const data = await accountModel.getAllByUser(req.params.id);
    res.json(data);
};

export default accountController;
