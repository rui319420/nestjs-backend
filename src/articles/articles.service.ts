// src/articles/articles.service.ts
import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma.service'; // 追加

@Injectable()
export class ArticlesService {
  // PrismaServiceを注入
  constructor(private prisma: PrismaService) {}

  // 記事作成
  create(createArticleDto: CreateArticleDto) {
    return this.prisma.article.create({
      data: createArticleDto,
    });
  }

  // 全件取得
  findAll() {
    return this.prisma.article.findMany();
  }

  // IDで1件取得
  findOne(id: number) {
    return this.prisma.article.findUnique({
      where: { id },
    });
  }

  // ... update と remove は一旦そのままでもOK
  update(id: number, updateArticleDto: UpdateArticleDto) { return `This action updates a #${id} article`; }
  remove(id: number) { return `This action removes a #${id} article`; }
}