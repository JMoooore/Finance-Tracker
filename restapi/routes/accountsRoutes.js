import { Router, json } from 'express';
import accountController from '../controllers/accountsController.js';

const accounts = new Router();
accounts.use(json());

accounts.get('/', accountController.getAllAccounts);

accounts.get('/users/:user_id', accountController.getAllByUser);

accounts.post('/users/:user_id', accountController.createNewAccount);

accounts.patch('/users/:user_id/:account_id', accountController.updateAccount);

export default accounts;
