import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { InjectRepository } from "@nestjs/typeorm";
import Post from "./entities/post.entity";
import { Repository } from "typeorm";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private repository: Repository<Post>,
  ) {}

  create(createPostDto: CreatePostDto) {
    return this.repository.save(createPostDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id }, relations: { writer: true, category: true } });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.repository.update(id, updatePostDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
