import { Router, json } from 'express';
import accountsController from '../controllers/accountsController.js';

const accounts = new Router();
accounts.use(json());

accounts.get('/forUser:user_id', accountsController.getAllByUser);

accounts.post('/forUser:user_id', accountsController.addOne);

accounts.delete('/:account_id', accountsController.deleteOne);

accounts.patch('/:account_id', accountsController.changeOne);

export default accounts;
