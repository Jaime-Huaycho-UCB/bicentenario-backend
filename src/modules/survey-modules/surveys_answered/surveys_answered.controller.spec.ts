import { Test, TestingModule } from '@nestjs/testing';
import { SurveysAnsweredController } from './surveys_answered.controller';
import { SurveysAnsweredService } from './surveys_answered.service';

describe('SurveysAnsweredController', () => {
  let controller: SurveysAnsweredController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurveysAnsweredController],
      providers: [SurveysAnsweredService],
    }).compile();

    controller = module.get<SurveysAnsweredController>(SurveysAnsweredController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
