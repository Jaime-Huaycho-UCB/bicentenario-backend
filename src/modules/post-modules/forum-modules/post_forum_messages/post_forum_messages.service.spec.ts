import { Test, TestingModule } from '@nestjs/testing';
import { PostForumMessagesService } from './post_forum_messages.service';

describe('PostForumMessagesService', () => {
  let service: PostForumMessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostForumMessagesService],
    }).compile();

    service = module.get<PostForumMessagesService>(PostForumMessagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
