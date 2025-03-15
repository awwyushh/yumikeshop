import { NestFactory } from '@nestjs/core';
import { AuthServiceModule } from './auth-service.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AuthServiceModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'auth-service-group',
      },
    },
  });

  await app.listen();

  console.log('✅ Auth Service is running');

}
bootstrap();
