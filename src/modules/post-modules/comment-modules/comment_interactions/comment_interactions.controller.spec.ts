import { Test, TestingModule } from '@nestjs/testing';
import { CommentInteractionsController } from './comment_interactions.controller';
import { CommentInteractionsService } from './comment_interactions.service';

describe('CommentInteractionsController', () => {
  let controller: CommentInteractionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentInteractionsController],
      providers: [CommentInteractionsService],
    }).compile();

    controller = module.get<CommentInteractionsController>(CommentInteractionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
