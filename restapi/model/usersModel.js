import db from "./connection.js";

const userModel = {}
const users = db('users')

userModel.getAll = async () => {
    return await users.select()
}

userModel.getOne = () => {

}

export default userModel;