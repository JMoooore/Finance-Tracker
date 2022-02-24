import userModel from '../model/usersModel.js';
import transModel from '../model/transModel.js';
import payeesModel from '../model/payeesModel.js';
import categoriesModel from '../model/categoriesModel.js';
import accountModel from '../model/accountsModel.js';

const userController = {};

userController.getAllData = async (req, res) => {
    const data = {
        user: await userModel.getOne(req.params.id),
        transactions: await userModel.getFullData(req.params.id),
        payees: await payeesModel.getAll(req.params.id),
        categories: await categoriesModel.getAll(req.params.id),
        accounts: await accountModel.getAllAccounts(req.params.id),
    };
    res.json(data);
};

userController.getAll = async (req, res) => {
    const data = await userModel.getAll();
    res.json(data);
};

userController.getOne = async (req, res) => {
    const data = await userModel.getOne(req.params.id);
    res.json(data);
};

userController.getFullData = async (req, res) => {
    const data = await userModel.getFullData(req.params.id);
    res.json(data);
};

userController.createOne = async (req, res) => {
    const data = await userModel.createOne(req.body);
    res.json(data);
};

userController.login = async (req, res) => {
    const data = await userModel.login(req.body);
    if (data) {
        res.json(data);
    } else {
        res.status(500).send('Login failed');
    }
};

userController.updateOne = async (req, res) => {
    const data = await userModel.updateOne(req.params.id, req.body);
    res.json(data);
};

userController.removeOne = async (req, res) => {
    const data = await userModel.removeOne(req.params.id);
    res.json(data);
};

export default userController;
