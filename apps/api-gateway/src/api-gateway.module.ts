import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { ClientsModule, Transport } from '@nestjs/microservices';


@Module({
  imports: [
    ClientsModule.register([{
      name: 'AUTH_SERVICE',
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:9092']
        },
        consumer: {
          groupId: 'auth-consumer'
        }
      }
    }])
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
