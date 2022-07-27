import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/multer';
import { CreateProductController } from '../controllers/product';
import { AuthMiddleware } from '../middlewares/AuthMiddleware';

const product = Router();
const upload = multer(uploadConfig.upload('./tmp'));

product.post('/products', AuthMiddleware, upload.single('file'), new CreateProductController().handle);
// router.get('/products', AuthMiddleware, new );

export { product };
