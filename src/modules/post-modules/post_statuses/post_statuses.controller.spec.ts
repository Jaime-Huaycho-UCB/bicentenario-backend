import { Test, TestingModule } from '@nestjs/testing';
import { PostStatusesController } from './post_statuses.controller';
import { PostStatusesService } from './post_statuses.service';

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
