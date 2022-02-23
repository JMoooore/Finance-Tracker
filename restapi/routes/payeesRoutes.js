import { Router, json } from 'express';
import payeesController from '../controllers/payeesController.js';

const payees = new Router();
payees.use(json());

payees.get('/forUser:user_id', payeesController.getAll);

payees.post('/forUser:user_id', payeesController.addOne);

payees.delete('/:payee_id', payeesController.deleteOne);

payees.patch('/:payee_id', payeesController.changeOne);

export default payees;
