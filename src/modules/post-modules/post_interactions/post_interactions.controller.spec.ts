import { Test, TestingModule } from '@nestjs/testing';
import { PostInteractionsController } from './post_interactions.controller';
import { PostInteractionsService } from './post_interactions.service';

describe('PostInteractionsController', () => {
  let controller: PostInteractionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostInteractionsController],
      providers: [PostInteractionsService],
    }).compile();

    controller = module.get<PostInteractionsController>(PostInteractionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
