import { Router, json } from 'express';
import transactionsController from '../controllers/transactionsController.js';

const transactions = new Router();
transactions.use(json());

transactions.get('/forUser:user_id', transactionsController.getAllByUser);

transactions.post('/forUser:user_id', transactionsController.addOne);

transactions.delete('/:transaction_id', transactionsController.deleteOne);

transactions.patch('/:transaction_id', transactionsController.changeOne);

export default transactions;
