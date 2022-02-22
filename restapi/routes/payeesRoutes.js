import { Router, json } from 'express';
import payeesController from '../controllers/payeesController.js';

const payees = new Router();
payees.use(json());

payees.get('/users/:id', payeesController.getAll);

payees.get('/users/:id/:payee_id', payeesController.getOne);

payees.post('/users/:id', payeesController.addOne);

payees.delete('/users/:id/:payee_id', payeesController.deleteOne);

payees.patch('/users/:id/:payee_id', payeesController.changeOne)

export default payees;
