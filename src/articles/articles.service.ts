import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma.service';
import { Article } from '@prisma/client';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    return await this.prisma.article.create({
      data: createArticleDto,
    });
  }

  async findAll(): Promise<Article[]> {
    return await this.prisma.article.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.article.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    return await this.prisma.article.update({
      where: { id },
      data: updateArticleDto,
    });
  }

  async remove(id: number): Promise<Article> {
    return await this.prisma.article.delete({
      where: { id },
    });
  }
}
