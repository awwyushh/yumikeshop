import { NestFactory } from '@nestjs/core';
import { MonitoringServiceModule } from './monitoring-service.module';

async function bootstrap() {
  const app = await NestFactory.create(MonitoringServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
