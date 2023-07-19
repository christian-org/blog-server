import { ApiProperty } from "@nestjs/swagger";
import Post from "../entities/post.entity";
import { plainToClass } from "class-transformer";

export class CreatePostDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  userid: number;

  toEntity = () => plainToClass(Post, this);
}
