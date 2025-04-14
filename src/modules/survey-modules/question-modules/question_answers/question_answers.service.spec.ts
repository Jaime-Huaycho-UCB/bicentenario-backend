import { Test, TestingModule } from '@nestjs/testing';
import { QuestionAnswersService } from './question_answers.service';

describe('QuestionAnswersService', () => {
  let service: QuestionAnswersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionAnswersService],
    }).compile();

    service = module.get<QuestionAnswersService>(QuestionAnswersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
