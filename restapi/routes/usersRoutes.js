import { Router, json } from 'express';
import userController from '../controllers/userController.js';

const users = new Router();
users.use(json());

users.get('/', userController.getAll);

users.get('/:id', userController.getOne);

users.post('/', userController.post);

export default users;
