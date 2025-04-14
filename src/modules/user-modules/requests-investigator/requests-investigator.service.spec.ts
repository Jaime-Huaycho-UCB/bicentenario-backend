import { Test, TestingModule } from '@nestjs/testing';
import { RequestsInvestigatorService } from './requests-investigator.service';

describe('RequestsInvestigatorService', () => {
  let service: RequestsInvestigatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestsInvestigatorService],
    }).compile();

    service = module.get<RequestsInvestigatorService>(RequestsInvestigatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
