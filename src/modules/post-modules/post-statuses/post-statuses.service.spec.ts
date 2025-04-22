import { Test, TestingModule } from '@nestjs/testing';
import { PostStatusesService } from './services/post-statuses.service';

describe('PostStatusesService', () => {
  let service: PostStatusesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostStatusesService],
    }).compile();

    service = module.get<PostStatusesService>(PostStatusesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
