import userModel from "../model/usersModel.js";

const userController = {}

userController.getAll = async (req,res) => {
    const data = await userModel.getAll()
    res.json(data)
}

userController.getOne = async (req,res) => {
    console.log(req.params.id)
    const data = await userModel.getOne(req.params.id)
    console.log(data)
    res.json(data)
}

export default userController