import { Test, TestingModule } from '@nestjs/testing';
import { PostForumMessagesController } from './post_forum_messages.controller';
import { PostForumMessagesService } from './post_forum_messages.service';

describe('PostForumMessagesController', () => {
  let controller: PostForumMessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostForumMessagesController],
      providers: [PostForumMessagesService],
    }).compile();

    controller = module.get<PostForumMessagesController>(PostForumMessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
