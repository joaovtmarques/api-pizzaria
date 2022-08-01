import prismaClient from '../../prisma';

interface OrderRequest {
  table: number;
  name: string;
}

export class CreateOrderService {
  async execute({ name, table }:OrderRequest) {
    const order = await prismaClient.order.create({
      data: {
        name,
        table,
      },
    });

    return order;
  }
}
