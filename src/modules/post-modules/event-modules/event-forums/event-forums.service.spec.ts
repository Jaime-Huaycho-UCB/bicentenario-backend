import { Test, TestingModule } from '@nestjs/testing';
import { EventForumsService } from './event-forums.service';

describe('EventForumsService', () => {
  let service: EventForumsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventForumsService],
    }).compile();

    service = module.get<EventForumsService>(EventForumsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
