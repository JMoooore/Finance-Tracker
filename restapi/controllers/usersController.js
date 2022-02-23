import userModel from '../model/usersModel.js';

const userController = {};

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

userController.updateOne = async (req, res) => {
    const data = await userModel.updateOne(req.params.id, req.body);
    res.json(data);
};

userController.removeOne = async (req, res) => {
    const data = await userModel.removeOne(req.params.id);
    res.json(data);
};

export default userController;
