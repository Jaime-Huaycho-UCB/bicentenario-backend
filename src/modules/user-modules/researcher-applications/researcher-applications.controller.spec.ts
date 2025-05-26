import { Test, TestingModule } from '@nestjs/testing';
import { ResearcherApplicationsController } from './researcher-applications.controller';
import { ResearcherApplicationsService } from './services/researcher-applications.service';

describe('ResearcherApplicationsController', () => {
  let controller: ResearcherApplicationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResearcherApplicationsController],
      providers: [ResearcherApplicationsService],
    }).compile();

    controller = module.get<ResearcherApplicationsController>(ResearcherApplicationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
