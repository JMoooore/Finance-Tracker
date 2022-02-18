import { Router, json } from 'express';
import db from '../model/connection.js';
import userController from '../controllers/userController.js';


const users = new Router();
users.use(json());

users.get('/', userController.getAll);

users.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await db('users').where('id', id);
        res.json(result);
    } catch (err) {
        errorHandler(err, res);
    }
});

export default users;
