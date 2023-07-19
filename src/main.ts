import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { AllExceptionsFilter } from "./filter/all/all-exception.filter";
import { logger } from "./utils/logger/logger.middleware";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import { AppModule } from "./api/app.module";

const PORT = process.env.PORT || 4000;
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const httpAdapterHost = app.get(HttpAdapterHost);

  /* START OF REGISTER */
  app.setGlobalPrefix("api", { exclude: [""] }); //exclude AppController
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapterHost));
  app.useStaticAssets(join(process.cwd(), "public"), { prefix: "/public" });
  app.setBaseViewsDir(join(process.cwd(), "views"));
  app.setViewEngine("hbs");
  app.use(logger); // .forRoutes('*')
  /* END OF REGISTER */

  await app.listen(PORT);
}
bootstrap();
