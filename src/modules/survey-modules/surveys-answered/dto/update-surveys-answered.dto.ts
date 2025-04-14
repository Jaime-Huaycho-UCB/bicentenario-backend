import { PartialType } from '@nestjs/mapped-types';
import { CreateSurveysAnsweredDto } from './create-surveys-answered.dto';

export class UpdateSurveysAnsweredDto extends PartialType(CreateSurveysAnsweredDto) {}
