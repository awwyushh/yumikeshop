import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import {MicroserviceOptions, Transport} from '@nestjs/microservices'


async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client:{
        brokers: ['localhost:9092'],
      },
      consumer:{
        groupId: 'api-gateway-consumer'
      }
    }
  })

  await app.startAllMicroservices();
  await app.listen(process.env.port ?? 3000);
  console.log(`Api Gateway is running on: ${await app.getUrl()}`);
}
bootstrap();
