import { Test, TestingModule } from '@nestjs/testing';
import { EventForumMessagesService } from './event_forum_messages.service';

describe('EventForumMessagesService', () => {
  let service: EventForumMessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventForumMessagesService],
    }).compile();

    service = module.get<EventForumMessagesService>(EventForumMessagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
