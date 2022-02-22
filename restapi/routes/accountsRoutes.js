import { Router, json } from 'express';
import accountController from '../controllers/accountsController.js';

const accounts = new Router();
accounts.use(json());

accounts.get('/users/:id', accountController.getAllByUser);

export default accounts;
