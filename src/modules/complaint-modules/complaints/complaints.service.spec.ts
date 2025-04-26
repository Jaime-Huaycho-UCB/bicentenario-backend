import { Test, TestingModule } from '@nestjs/testing';
import { ComplaintsService } from './services/complaints.service';

describe('ComplaintsService', () => {
  let service: ComplaintsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComplaintsService],
    }).compile();

    service = module.get<ComplaintsService>(ComplaintsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
