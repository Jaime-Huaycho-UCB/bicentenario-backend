import { Module } from '@nestjs/common';
import { EventsService } from './services/events.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { CitiesModule } from 'src/modules/location-modules/cities/cities.module';
import { EventsValidator } from './services/events.validator';

@Module({
  imports: [
    TypeOrmModule.forFeature([Event]),
    CitiesModule
  ],
  controllers: [EventsController],
  providers: [EventsService,EventsValidator],
  exports: [EventsService]
})
export class EventsModule {}
