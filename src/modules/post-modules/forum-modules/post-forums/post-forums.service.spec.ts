import { Test, TestingModule } from '@nestjs/testing';
import { PostForumsService } from './post-forums.service';

describe('PostForumsService', () => {
  let service: PostForumsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostForumsService],
    }).compile();

    service = module.get<PostForumsService>(PostForumsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
