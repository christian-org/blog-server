import { Injectable } from "@nestjs/common";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { InjectRepository } from "@nestjs/typeorm";
import Category from "./entities/category.entity";
import { Repository } from "typeorm";
import { plainToClass } from "class-transformer";

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private repository: Repository<Category>,
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    console.log(createCategoryDto);
    const entity = plainToClass(Category, createCategoryDto);
    console.log(createCategoryDto, entity);
    return this.repository.save(entity);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const entity = plainToClass(Category, updateCategoryDto);

    return this.repository.update(id, entity);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
