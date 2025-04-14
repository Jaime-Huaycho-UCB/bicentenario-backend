import { Test, TestingModule } from '@nestjs/testing';
import { PostTagsController } from './post_tags.controller';
import { PostTagsService } from './post_tags.service';

describe('PostTagsController', () => {
  let controller: PostTagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostTagsController],
      providers: [PostTagsService],
    }).compile();

    controller = module.get<PostTagsController>(PostTagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
