import { Test, TestingModule } from '@nestjs/testing';
import { PostForumMessagesController } from './post-forum-messages.controller';
import { PostForumMessagesService } from './post-forum-messages.service';

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
