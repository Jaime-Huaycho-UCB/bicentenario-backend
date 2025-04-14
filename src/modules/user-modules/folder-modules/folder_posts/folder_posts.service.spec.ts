import { Test, TestingModule } from '@nestjs/testing';
import { FolderPostsService } from './folder_posts.service';

describe('FolderPostsService', () => {
  let service: FolderPostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FolderPostsService],
    }).compile();

    service = module.get<FolderPostsService>(FolderPostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
