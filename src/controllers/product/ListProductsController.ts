import { Request, Response } from 'express';

import { ListProductsService } from '../../services/product';

export class ListProductsController {
  async handle(req: Request, res: Response) {
    const listProductsService = new ListProductsService();

    const products = await listProductsService.execute();

    return res.json({ products });
  }
}
