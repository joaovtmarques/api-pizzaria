import { Router } from 'express';
import { CreateUserController, DetailUserController } from '../controllers/user';
import { AuthMiddleware } from '../middlewares/AuthMiddleware';

const user = Router();

user.post('/users', new CreateUserController().handle);
user.get('/user', AuthMiddleware, new DetailUserController().handle);

export { user };
