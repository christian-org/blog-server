import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_USERNAME } from "../constants";

const isProd = process.env.NODE_ENV === "production";
const rootDir = isProd ? "dist/" : "";
console.log('rootDir + "src/api/**/entities/*.entity.{ts,js}" > ', rootDir + "src/api/**/entities/*.entity.{ts,js}");
export default (configService: ConfigService): TypeOrmModuleOptions => {
  return {
    type: "mysql",
    host: configService.get(DATABASE_HOST),
    port: +configService.get(DATABASE_PORT),
    username: configService.get(DATABASE_USERNAME),
    password: configService.get(DATABASE_PASSWORD),
    database: configService.get(DATABASE_NAME),
    synchronize: true,
    logging: true,
    entities: [rootDir + "src/api/**/entities/*.entity.{ts,js}"],
    // seeds: ["src/database/seeds/*.entity.{ts,js}"],
  };
};
