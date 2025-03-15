import { Module } from '@nestjs/common';
import { MonitoringServiceController } from './monitoring-service.controller';
import { MonitoringServiceService } from './monitoring-service.service';

@Module({
  imports: [],
  controllers: [MonitoringServiceController],
  providers: [MonitoringServiceService],
})
export class MonitoringServiceModule {}
