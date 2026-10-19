import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000;
  app.setGlobalPrefix('api/v1');
  await app.listen(port, () => {
    Logger.log(`Server started on port ${port}`, 'NestApplication');
  });
}
await bootstrap();
