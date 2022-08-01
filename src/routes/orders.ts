import { Router } from 'express';

import { CreateOrderController, RemoveOrderController } from '../controllers/order';
import { AuthMiddleware } from '../middlewares/AuthMiddleware';

const order = Router();

order.post('/orders', AuthMiddleware, new CreateOrderController().handle);
order.delete('/orders', AuthMiddleware, new RemoveOrderController().handle);

export { order };
