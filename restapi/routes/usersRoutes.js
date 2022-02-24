import { Router, json } from 'express';
import usersController from '../controllers/usersController.js';

const users = new Router();
users.use(json());

users.get('/:id/data', usersController.getAllData)

users.get('/', usersController.getAll);

users.get('/:id', usersController.getOne);

users.get('/all/:id', usersController.getFullData);

users.post('/', usersController.createOne);

users.post('/login', usersController.login);

users.patch('/:id', usersController.updateOne);

users.delete('/:id', usersController.removeOne);

export default users;
