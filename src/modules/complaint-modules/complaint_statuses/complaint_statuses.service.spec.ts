import { Test, TestingModule } from '@nestjs/testing';
import { ComplaintStatusesService } from './complaint_statuses.service';

describe('ComplaintStatusesService', () => {
  let service: ComplaintStatusesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComplaintStatusesService],
    }).compile();

    service = module.get<ComplaintStatusesService>(ComplaintStatusesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
