import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import path from 'path';

import {
  session, category, product, user,
} from './routes';

import 'express-async-errors';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', session, user, category, product);

app.use(
  '/api/files',
  express.static(path.resolve(__dirname, '..', 'tmp')),
);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error.',
  });
});

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));
