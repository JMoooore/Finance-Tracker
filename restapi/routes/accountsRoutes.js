import { Router, json } from 'express';
import accountController from '../controllers/accountsController.js';

const accounts = new Router();
accounts.use(json());

accounts.get('/users/:id', accountController.getAllByUser);
accounts.post('/users/:id', accountController.createNewAccount);

export default accounts;
