import { Test, TestingModule } from '@nestjs/testing';
import { PostStartsController } from './post_starts.controller';
import { PostStartsService } from './post_starts.service';

describe('PostStartsController', () => {
  let controller: PostStartsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostStartsController],
      providers: [PostStartsService],
    }).compile();

    controller = module.get<PostStartsController>(PostStartsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
