import { Test, TestingModule } from '@nestjs/testing';
import { PostComplaintsController } from './post-complaints.controller';
import { PostComplaintsService } from './post-complaints.service';

describe('PostComplaintsController', () => {
  let controller: PostComplaintsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostComplaintsController],
      providers: [PostComplaintsService],
    }).compile();

    controller = module.get<PostComplaintsController>(PostComplaintsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
