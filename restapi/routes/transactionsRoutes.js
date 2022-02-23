import { Router, json } from 'express';
import transactionsController from '../controllers/transactionsController.js';

const transactions = new Router();
transactions.use(json());

transactions.get('/forUser:user_id', transactionsController.getAll);

transactions.post('/forUser:user_id', transactionsController.createOne);

transactions.delete('/:transaction_id', transactionsController.removeOne);

transactions.patch('/:transaction_id', transactionsController.updateOne);

export default transactions;
