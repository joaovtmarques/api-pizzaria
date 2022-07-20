import { Router } from 'express';

import { CreateCategoryController, ListCategoriesController } from './controllers/category';
import { AuthUserController, CreateUserController, DetailUserController } from './controllers/user';
import { AuthMiddleware } from './middlewares/AuthMiddleware';

const router = Router();

// users
router.post('/users', new CreateUserController().handle);
router.get('/user', AuthMiddleware, new DetailUserController().handle);

// sessions
router.post('/sessions', new AuthUserController().handle);

// categories
router.post('/categories', AuthMiddleware, new CreateCategoryController().handle);
router.get('/categories', AuthMiddleware, new ListCategoriesController().handle);

export { router };
