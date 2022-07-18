import { Router } from 'express';

import { AuthUserController, CreateUserController, DetailUserController } from './controllers/user';
import { AuthMiddleware } from './middlewares/AuthMiddleware';

const router = Router();

// users
router.post('/users', new CreateUserController().handle);
router.get('/user', AuthMiddleware, new DetailUserController().handle);

// sessions
router.post('/sessions', new AuthUserController().handle);

export { router };
