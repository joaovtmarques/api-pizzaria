import prismaClient from '../../prisma';

export class ListProductsService {
  async execute() {
    const products = await prismaClient.category.findMany({});

    return products;
  }
}
