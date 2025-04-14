import { Test, TestingModule } from '@nestjs/testing';
import { EventForumMessagesController } from './event-forum_messages.controller';
import { EventForumMessagesService } from './event-forum_messages.service';

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
