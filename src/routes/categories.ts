import { Router } from 'express';

import { CreateCategoryController, ListCategoriesController } from '../controllers/category';
import { AuthMiddleware } from '../middlewares/AuthMiddleware';

const category = Router();

category.post('/categories', AuthMiddleware, new CreateCategoryController().handle);
category.get('/categories', AuthMiddleware, new ListCategoriesController().handle);

export { category };
