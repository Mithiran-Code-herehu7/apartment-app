import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.categories.findMany({
      where: { is_active: true },
      orderBy: { display_order: 'asc' },
    });
  }

  async findOne(slug: string) {
    const category = await this.prisma.categories.findUnique({
      where: { slug },
      include: {
        other_categories: true, // subcategories
      },
    });

    if (!category) {
      throw new NotFoundException(`Category ${slug} not found`);
    }

    return category;
  }

  async create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.categories.create({
      data: {
        name: createCategoryDto.name,
        slug: createCategoryDto.slug,
        description: createCategoryDto.description,
        icon_url: createCategoryDto.iconUrl,
        parent_id: createCategoryDto.parentId,
        display_order: createCategoryDto.displayOrder ?? 0,
      },
    });
  }
}
