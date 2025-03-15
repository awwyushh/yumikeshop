import { Injectable } from '@nestjs/common';

@Injectable()
export class MonitoringServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
