import { Module } from '@nestjs/common';
import { ResearcherApplicationsService } from './services/researcher-applications.service';
import { ResearcherApplicationsController } from './researcher-applications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResearcherApplication } from './entities/researcher-application.entity';
import { ResearcherApplicationsValidator } from './services/researcher-applications.validator';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ResearcherApplication]),
    UsersModule,
  ],
  controllers: [ResearcherApplicationsController],
  providers: [ResearcherApplicationsService,ResearcherApplicationsValidator],
  exports: [ResearcherApplicationsService]
})
export class ResearcherApplicationsModule {}
