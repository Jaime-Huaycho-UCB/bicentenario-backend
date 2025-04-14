import { Test, TestingModule } from '@nestjs/testing';
import { CommentComplaintsService } from './comment-complaints.service';

describe('CommentComplaintsService', () => {
  let service: CommentComplaintsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentComplaintsService],
    }).compile();

    service = module.get<CommentComplaintsService>(CommentComplaintsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
