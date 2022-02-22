import { Router, json } from 'express';
import userController from '../controllers/usersController.js';

const users = new Router();
users.use(json());

users.get('/', userController.getAll);

users.get('/:id', userController.getOne);

users.post('/', userController.post);

users.patch('/:id', userController.patch);

users.delete('/:id', userController.delete);

export default users;
