import { Test, TestingModule } from '@nestjs/testing';
import { ComplaintStatusesController } from './complaint_statuses.controller';
import { ComplaintStatusesService } from './complaint_statuses.service';

describe('ComplaintStatusesController', () => {
  let controller: ComplaintStatusesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComplaintStatusesController],
      providers: [ComplaintStatusesService],
    }).compile();

    controller = module.get<ComplaintStatusesController>(ComplaintStatusesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
