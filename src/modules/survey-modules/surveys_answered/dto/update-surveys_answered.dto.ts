import { PartialType } from '@nestjs/mapped-types';
import { CreateSurveysAnsweredDto } from './create-surveys_answered.dto';

export class UpdateSurveysAnsweredDto extends PartialType(CreateSurveysAnsweredDto) {}
