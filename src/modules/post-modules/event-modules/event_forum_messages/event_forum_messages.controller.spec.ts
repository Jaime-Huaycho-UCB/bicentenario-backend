import { Test, TestingModule } from '@nestjs/testing';
import { EventForumMessagesController } from './event_forum_messages.controller';
import { EventForumMessagesService } from './event_forum_messages.service';

describe('EventForumMessagesController', () => {
  let controller: EventForumMessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventForumMessagesController],
      providers: [EventForumMessagesService],
    }).compile();

    controller = module.get<EventForumMessagesController>(EventForumMessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
