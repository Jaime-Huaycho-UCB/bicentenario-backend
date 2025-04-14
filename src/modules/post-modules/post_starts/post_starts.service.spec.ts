import { Test, TestingModule } from '@nestjs/testing';
import { PostStartsService } from './post_starts.service';

describe('PostStartsService', () => {
  let service: PostStartsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostStartsService],
    }).compile();

    service = module.get<PostStartsService>(PostStartsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
