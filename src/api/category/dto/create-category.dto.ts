import { ApiProperty } from "@nestjs/swagger";
import { plainToClass } from "class-transformer";
import Category from "../entities/category.entity";

export class CreateCategoryDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  useyn: string;

  //FIXME: 객체지향... entity 만들 방법 고민하기
  toEntity = () => plainToClass(Category, this);
}
