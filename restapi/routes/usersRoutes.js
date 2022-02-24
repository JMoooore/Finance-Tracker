import { Router, json } from 'express';
import usersController from '../controllers/usersController.js';

const users = new Router();
users.use(json());

users.get('/:id/data', usersController.getAllDataForUser);

users.get('/', usersController.getAll);

users.get('/:id', usersController.getOne);

users.get('/transactions/:id', usersController.getTransactionsData);

users.post('/', usersController.createOne);

users.post('/login', usersController.login);

users.patch('/:id', usersController.changeOne);

users.delete('/:id', usersController.deleteOne);

export default users;
