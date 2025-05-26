import { Test, TestingModule } from '@nestjs/testing';
import { ResearcherApplicationsService } from './services/researcher-applications.service';

describe('ResearcherApplicationsService', () => {
  let service: ResearcherApplicationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResearcherApplicationsService],
    }).compile();

    service = module.get<ResearcherApplicationsService>(ResearcherApplicationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
