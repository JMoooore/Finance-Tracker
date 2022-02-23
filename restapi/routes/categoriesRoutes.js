import { Router, json } from 'express';
import categoriesController from '../controllers/categoriesController.js';

const categories = new Router();
categories.use(json());

categories.get('/forUser:user_id', categoriesController.getAll);

categories.post('/forUser:user_id', categoriesController.addOne);

categories.delete('/:category_id', categoriesController.removeOne);

categories.patch('/:category_id', categoriesController.updateOne);

export default categories;
