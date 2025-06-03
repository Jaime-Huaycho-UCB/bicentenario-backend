import { Module } from '@nestjs/common';
import { SurveysAnsweredService } from './services/surveys-answered.service';
import { SurveysAnsweredController } from './surveys-answered.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveysAnswered } from './entities/surveys-answered.entity';
import { UsersModule } from 'src/modules/user-modules/users/users.module';
import { PostsModule } from 'src/modules/post-modules/posts/posts.module';
import { SurveysModule } from '../surveys/surveys.module';
import { QuestionAnswersModule } from '../question-modules/question-answers/question-answers.module';
import { SurveysAnsweredValidator } from './services/surveys-answered.validator';

@Module({
  imports: [
    TypeOrmModule.forFeature([SurveysAnswered]),
    UsersModule,
    PostsModule,
    SurveysModule,
    QuestionAnswersModule
  ],
  controllers: [SurveysAnsweredController],
  providers: [SurveysAnsweredService,SurveysAnsweredValidator],
  exports: [SurveysAnsweredService]
})
export class SurveysAnsweredModule {}
