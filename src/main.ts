import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true, // supprime les propriétés non attendues
        forbidNonWhitelisted: true, // rejette la requête si props inattendues
        transform: true, // transforme les payloads en classes (nécessite class-transformer)
      }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
