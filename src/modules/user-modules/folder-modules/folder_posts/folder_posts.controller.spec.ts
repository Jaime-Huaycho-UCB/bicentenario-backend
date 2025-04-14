import { Test, TestingModule } from '@nestjs/testing';
import { FolderPostsController } from './folder_posts.controller';
import { FolderPostsService } from './folder_posts.service';

describe('FolderPostsController', () => {
  let controller: FolderPostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FolderPostsController],
      providers: [FolderPostsService],
    }).compile();

    controller = module.get<FolderPostsController>(FolderPostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
