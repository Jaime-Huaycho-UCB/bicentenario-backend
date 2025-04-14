import { Test, TestingModule } from '@nestjs/testing';
import { CommentInteractionsService } from './comment-interactions.service';

describe('CommentInteractionsService', () => {
  let service: CommentInteractionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentInteractionsService],
    }).compile();

    service = module.get<CommentInteractionsService>(CommentInteractionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
