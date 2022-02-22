import { Router, json } from 'express';
import transactionsController from '../controllers/transactionsController.js'

const transactions = new Router();
transactions.use(json());

transactions.post('/', transactionsController.postTransaction)

transactions.delete('/:id', transactionsController.deleteOne)

transactions.patch('/:id', transactionsController.editTransaction)

transactions.get('/', transactionsController.getAll)

export default transactions;
