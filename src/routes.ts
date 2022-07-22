import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/multer';

import { CreateCategoryController, ListCategoriesController } from './controllers/category';
import { CreateProductController } from './controllers/product';
import { AuthUserController, CreateUserController, DetailUserController } from './controllers/user';
import { AuthMiddleware } from './middlewares/AuthMiddleware';

const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));

// users
router.post('/users', new CreateUserController().handle);
router.get('/user', AuthMiddleware, new DetailUserController().handle);

// sessions
router.post('/sessions', new AuthUserController().handle);

// categories
router.post('/categories', AuthMiddleware, new CreateCategoryController().handle);
router.get('/categories', AuthMiddleware, new ListCategoriesController().handle);

// products
router.post('/products', AuthMiddleware, upload.single('file'), new CreateProductController().handle);
// router.get('/products', AuthMiddleware, new )

export { router };
