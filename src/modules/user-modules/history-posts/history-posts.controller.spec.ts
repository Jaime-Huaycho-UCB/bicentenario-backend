import { Test, TestingModule } from '@nestjs/testing';
import { HistoryPostsController } from './history-posts.controller';
import { HistoryPostsService } from './history-posts.service';

describe('HistoryPostsController', () => {
  let controller: HistoryPostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoryPostsController],
      providers: [HistoryPostsService],
    }).compile();

    controller = module.get<HistoryPostsController>(HistoryPostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
