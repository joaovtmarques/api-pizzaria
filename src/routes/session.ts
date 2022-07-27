import { Router } from 'express';
import { AuthUserController } from '../controllers/user';

const session = Router();

session.post('/sessions', new AuthUserController().handle);

export { session };
