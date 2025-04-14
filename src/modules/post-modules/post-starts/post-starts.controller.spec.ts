import { Test, TestingModule } from '@nestjs/testing';
import { PostStartsController } from './post-starts.controller';
import { PostStartsService } from './post-starts.service';

describe('PostStartsController', () => {
  let controller: PostStartsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostStartsController],
      providers: [PostStartsService],
    }).compile();

    controller = module.get<PostStartsController>(PostStartsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
