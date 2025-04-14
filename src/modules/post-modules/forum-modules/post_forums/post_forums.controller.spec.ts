import { Test, TestingModule } from '@nestjs/testing';
import { PostForumsController } from './post_forums.controller';
import { PostForumsService } from './post_forums.service';

describe('PostForumsController', () => {
  let controller: PostForumsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostForumsController],
      providers: [PostForumsService],
    }).compile();

    controller = module.get<PostForumsController>(PostForumsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
