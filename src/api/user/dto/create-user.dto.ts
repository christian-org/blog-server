import { ApiProperty } from "@nestjs/swagger";
import User from "../entities/user.entity";
import { plainToClass } from "class-transformer";

export class CreateUserDto {
  @ApiProperty()
  private name: string;

  public toEntity() {
    console.log("name > ", User.from({ name: this.name }));
    console.log("name > ", this, this.name);
    console.log("name > ", plainToClass(User, this));
    return plainToClass(User, this);
  }
}
