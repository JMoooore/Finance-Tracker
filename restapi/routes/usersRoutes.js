import { Router, json } from 'express';
import usersController from '../controllers/usersController.js';

const users = new Router();
users.use(json());

users.get('/', usersController.getAll);

users.get('/:id', usersController.getOne);

users.post('/', usersController.createOne);

users.patch('/:id', usersController.updateOne);

users.delete('/:id', usersController.removeOne);

export default users;
