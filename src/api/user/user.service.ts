import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import User from "./entities/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { plainToClass } from "class-transformer";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const entity = plainToClass(User, createUserDto);
    console.log("entity >", createUserDto.toEntity);
    // const entity = createUserDto.toEntity();
    // console.log("entity >", entity, createUserDto);
    return this.repository.save(entity);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const entity = updateUserDto.toEntity();
    return this.repository.update(id, entity);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
