import prismaClient from '../../prisma';

interface ProductRequest {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

export class CreateProductService {
  async execute({
    banner, category_id, description, name, price,
  }: ProductRequest) {
    const product = await prismaClient.product.create({
      data: {
        name,
        price,
        description,
        category_id,
        banner,
      },
    });

    return product;
  }
}
