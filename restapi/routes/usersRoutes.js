import { Router, json } from 'express';
import { user } from 'pg/lib/defaults';
import userController from '../controllers/userController.js';

const users = new Router();
users.use(json());

users.get('/', userController.getAll);

users.get('/:id', userController.getOne);

users.post('/', userController.post);

user.patch('/:id', userController.patch);

users.delete('/:id', userController.delete);

export default users;
