import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('FiestApp API')
    .setDescription('The API of the FiestApp application')
    .setVersion('1.0')
    .addTag('FiestApp')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true, // supprime les propriétés non attendues
        forbidNonWhitelisted: true, // rejette la requête si props inattendues
      transform: true, // transforme les payloads en classes (nécessite class-transformer)
      }),
  );
  console.log(`API is running on: localhost:${process.env.PORT ?? 3000}/api`);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
