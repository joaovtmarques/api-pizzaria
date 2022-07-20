import prismaClient from '../../prisma';

interface CategoryRequest {
  name: string
}

export class CreateCategoryService {
  async execute({ name }: CategoryRequest) {
    if (name === '') {
      throw new Error('Name is not provided');
    }

    const categoryExists = await prismaClient.category.findFirst({
      where: {
        name,
      },
    });

    if (categoryExists) {
      throw new Error('Category already exists');
    }

    const category = await prismaClient.category.create({
      data: {
        name,
      },
    });

    return category;
  }
}
