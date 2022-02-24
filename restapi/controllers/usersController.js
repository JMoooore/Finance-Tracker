import usersModel from '../model/usersModel.js';
import payeesModel from '../model/payeesModel.js';
import categoriesModel from '../model/categoriesModel.js';
import accountsModel from '../model/accountsModel.js';

const usersController = {};

usersController.getAllDataForUser = async (req, res) => {
    const data = {
        user: await usersModel.getOne(req.params.id),
        transactions: await usersModel.getTransactionsData(req.params.id),
        payees: await payeesModel.getAllByUser(req.params.id),
        categories: await categoriesModel.getAllByUser(req.params.id),
        accounts: await accountsModel.getAllByUser(req.params.id),
    };
    res.json(data);
};

usersController.getAll = async (req, res) => {
    const data = await usersModel.getAll();
    res.json(data);
};

usersController.getOne = async (req, res) => {
    const data = await usersModel.getOne(req.params.id);
    res.json(data);
};

usersController.getTransactionsData = async (req, res) => {
    const data = await usersModel.getFullData(req.params.id);
    res.json(data);
};

usersController.createOne = async (req, res) => {
    const data = await usersModel.createOne(req.body);
    res.json(data);
};

usersController.login = async (req, res) => {
    const data = await usersModel.login(req.body);
    if (data) {
        res.json(data);
    } else {
        res.status(500).send('Login failed');
    }
};

usersController.changeOne = async (req, res) => {
    const data = await usersModel.updateOne(req.params.id, req.body);
    res.json(data);
};

usersController.deleteOne = async (req, res) => {
    const data = await usersModel.removeOne(req.params.id);
    res.json(data);
};

export default usersController;
