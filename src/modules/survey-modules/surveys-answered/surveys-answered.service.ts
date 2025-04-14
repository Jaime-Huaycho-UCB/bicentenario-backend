import { Injectable } from '@nestjs/common';
import { CreateSurveysAnsweredDto } from './dto/create-surveys-answered.dto';
import { UpdateSurveysAnsweredDto } from './dto/update-surveys-answered.dto';

@Injectable()
export class SurveysAnsweredService {
  create(createSurveysAnsweredDto: CreateSurveysAnsweredDto) {
    return 'This action adds a new surveysAnswered';
  }

  findAll() {
    return `This action returns all surveysAnswered`;
  }

  findOne(id: number) {
    return `This action returns a #${id} surveysAnswered`;
  }

  update(id: number, updateSurveysAnsweredDto: UpdateSurveysAnsweredDto) {
    return `This action updates a #${id} surveysAnswered`;
  }

  remove(id: number) {
    return `This action removes a #${id} surveysAnswered`;
  }
}
