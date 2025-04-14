import { Test, TestingModule } from '@nestjs/testing';
import { SurveysAnsweredService } from './surveys-answered.service';

describe('SurveysAnsweredService', () => {
  let service: SurveysAnsweredService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurveysAnsweredService],
    }).compile();

    service = module.get<SurveysAnsweredService>(SurveysAnsweredService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
