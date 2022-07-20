import prismaClient from '../../prisma';

export class ListCategoriesService {
  async execute() {
    const category = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}
