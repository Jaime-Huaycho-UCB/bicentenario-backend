import { Test, TestingModule } from '@nestjs/testing';
import { HistoryPostsService } from './history_posts.service';

describe('HistoryPostsService', () => {
  let service: HistoryPostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistoryPostsService],
    }).compile();

    service = module.get<HistoryPostsService>(HistoryPostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
