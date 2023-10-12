import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin:['http://localhost:3000'], // debería ir la ip - frontend
    methods:'GET,PUT,POST,DELETE,PATH',
    credentials:true
  })
  await app.listen(3010);
}
bootstrap();
