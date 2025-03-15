import { Test, TestingModule } from '@nestjs/testing';
import { MonitoringServiceController } from './monitoring-service.controller';
import { MonitoringServiceService } from './monitoring-service.service';

describe('MonitoringServiceController', () => {
  let monitoringServiceController: MonitoringServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MonitoringServiceController],
      providers: [MonitoringServiceService],
    }).compile();

    monitoringServiceController = app.get<MonitoringServiceController>(MonitoringServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(monitoringServiceController.getHello()).toBe('Hello World!');
    });
  });
});
