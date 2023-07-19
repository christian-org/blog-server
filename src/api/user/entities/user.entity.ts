import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  //FIXME: 이렇게 하는 방식이 맞을지 고민하기
  static from({ name }: { name: string }) {
    const user = new User();
    user.name = name;
    return user;
  }
}
