import { Router } from 'express';

import { AuthUserController } from './controllers/user/AuthUserController';
import { CreateUserController } from './controllers/user/CreateUserController';

const router = Router();

// users
router.post('/users', new CreateUserController().handle);

// sessions
router.post('/sessions', new AuthUserController().handle);

export { router };
