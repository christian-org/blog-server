import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { CategoryModule } from "./category/category.module";
import { PostModule } from "./post/post.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { UserModule } from "./user/user.module";
import ormConfig from "../config/typeorm/ormconfig";

const isProd = process.env.NODE_ENV === "production";
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: [".env" + (isProd ? "" : "." + process.env.NODE_ENV)] }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: ormConfig,
    }),
    CategoryModule,
    PostModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
