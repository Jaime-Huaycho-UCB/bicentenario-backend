import { Test, TestingModule } from '@nestjs/testing';
import { CommentComplaintsController } from './comment-complaints.controller';
import { CommentComplaintsService } from './comment-complaints.service';

describe('CommentComplaintsController', () => {
  let controller: CommentComplaintsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentComplaintsController],
      providers: [CommentComplaintsService],
    }).compile();

    controller = module.get<CommentComplaintsController>(CommentComplaintsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
