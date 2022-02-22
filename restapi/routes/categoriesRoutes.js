import { Router, json } from 'express';
import categoriesController from '../controllers/categoriesController.js';

const categories = new Router();
categories.use(json());

categories.get('/', categoriesController.getAll);

categories.get('/:id', categoriesController.getOne);

categories.post('/', categoriesController.createOne);

categories.patch('/:id', categoriesController.updateOne);

categories.delete('/:id', categoriesController.removeOne);

export default categories;
