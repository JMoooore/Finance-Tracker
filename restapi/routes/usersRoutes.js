import { Router, json } from 'express';
import userController from '../controllers/usersController.js';

const users = new Router();
users.use(json());

users.get('/', userController.getAll);

users.get('/:id', userController.getOne);

users.post('/', userController.createOne);

users.patch('/:id', userController.updateOne);

users.delete('/:id', userController.removeOne);

export default users;
