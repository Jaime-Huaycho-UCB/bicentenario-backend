import { Test, TestingModule } from '@nestjs/testing';
import { PostStatusesController } from './post-statuses.controller';
import { PostStatusesService } from './post-statuses.service';

describe('PostStatusesController', () => {
  let controller: PostStatusesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostStatusesController],
      providers: [PostStatusesService],
    }).compile();

    controller = module.get<PostStatusesController>(PostStatusesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
