import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/multer';
import { CreateProductController, ListByCategoryController, ListProductsController } from '../controllers/product';
import { AuthMiddleware } from '../middlewares/AuthMiddleware';

const product = Router();
const upload = multer(uploadConfig.upload('./tmp'));

product.post('/products', AuthMiddleware, upload.single('file'), new CreateProductController().handle);
product.get('/products/category', AuthMiddleware, new ListByCategoryController().handle);
product.get('/products', AuthMiddleware, new ListProductsController().handle);

export { product };
