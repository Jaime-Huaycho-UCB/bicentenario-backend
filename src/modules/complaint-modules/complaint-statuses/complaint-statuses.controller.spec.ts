import { Test, TestingModule } from '@nestjs/testing';
import { ComplaintStatusesController } from './complaint-statuses.controller';
import { ComplaintStatusesService } from './complaint-statuses.service';

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
