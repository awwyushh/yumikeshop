import { Controller, Get } from '@nestjs/common';
import { MonitoringServiceService } from './monitoring-service.service';

@Controller()
export class MonitoringServiceController {
  constructor(private readonly monitoringServiceService: MonitoringServiceService) {}

  @Get()
  getHello(): string {
    return this.monitoringServiceService.getHello();
  }
}
