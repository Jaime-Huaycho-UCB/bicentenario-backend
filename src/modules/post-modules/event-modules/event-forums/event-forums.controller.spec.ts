import { Test, TestingModule } from '@nestjs/testing';
import { EventForumsController } from './event-forums.controller';
import { EventForumsService } from './event-forums.service';

describe('EventForumsController', () => {
  let controller: EventForumsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventForumsController],
      providers: [EventForumsService],
    }).compile();

    controller = module.get<EventForumsController>(EventForumsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
