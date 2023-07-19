import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "../../user/entities/user.entity";
import Category from "../../category/entities/category.entity";

@Entity()
export default class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  userid: number;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn({ name: "userid" })
  writer: User;

  @Column()
  categoryid: number;

  @ManyToOne(() => Category, category => category.id)
  @JoinColumn({ name: "categoryid" })
  category: Category;

  @CreateDateColumn()
  created_at: Date;
}
