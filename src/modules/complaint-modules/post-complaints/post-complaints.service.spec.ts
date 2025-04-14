import { Test, TestingModule } from '@nestjs/testing';
import { PostComplaintsService } from './post-complaints.service';

describe('PostComplaintsService', () => {
  let service: PostComplaintsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostComplaintsService],
    }).compile();

    service = module.get<PostComplaintsService>(PostComplaintsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
