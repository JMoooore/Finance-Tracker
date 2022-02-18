import userModel from "../model/usersModel.js";

const userController = {}

userController.getAll = async (req,res) => {
    const allData = await userModel.getAll()
    res.json(allData)
}

export default userController