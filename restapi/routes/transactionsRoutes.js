import { Router, json } from 'express';
import transactionsController from '../controllers/transactionsController.js';

const transactions = new Router();
transactions.use(json());

transactions.post('/', transactionsController.createOne);

transactions.delete('/:id', transactionsController.removeOne);

transactions.patch('/:id', transactionsController.updateOne);

transactions.get('/', transactionsController.getAll);

export default transactions;
