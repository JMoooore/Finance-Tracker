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

userController.post = async (req, res) => {
    const data = await userModel.post(req.body);
    res.json(data);
};

userController.delete = async (req, res) => {
    const data = await userModel.delete(req.params.id);
    res.json(data);
};

export default userController;
