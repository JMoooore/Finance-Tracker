import { Router, json } from 'express';
import accountController from '../controllers/accountsController.js';

const accounts = new Router();
accounts.use(json());

accounts.get('/forUser:user_id', accountController.getAllByUser);

accounts.post('/forUser:user_id', accountController.createNewAccount);

accounts.patch('/:account_id', accountController.updateOneAccount);

accounts.delete('/:account_id', accountController.deleteOneAccount);

export default accounts;
