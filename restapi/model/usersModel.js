import db from "./connection.js";

const userModel = {}
const users = db('users')

userModel.getAll = async () => {
    return await users.select()
}

userModel.getOne = async (id) => {
    return await users.where('id',id)
}

export default userModel;