import { PartialType } from '@nestjs/mapped-types';
import { CreateQuestionAnswerDto } from './create-question_answer.dto';

export class UpdateQuestionAnswerDto extends PartialType(CreateQuestionAnswerDto) {}
