import { Test, TestingModule } from '@nestjs/testing';
import { RequestsInvestigatorController } from './requests-investigator.controller';
import { RequestsInvestigatorService } from './requests-investigator.service';

describe('RequestsInvestigatorController', () => {
  let controller: RequestsInvestigatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestsInvestigatorController],
      providers: [RequestsInvestigatorService],
    }).compile();

    controller = module.get<RequestsInvestigatorController>(RequestsInvestigatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
