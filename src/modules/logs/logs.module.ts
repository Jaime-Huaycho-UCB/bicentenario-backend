import { Global, Module } from '@nestjs/common';
import { LogsService } from './services/logs.service';
import { LogsController } from './logs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Log } from './entities/log.entity';
import { UsersModule } from '../user-modules/users/users.module';
import { LogsValidator } from './services/logs.validator';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([Log]),
    UsersModule
  ],
  controllers: [LogsController],
  providers: [LogsService,LogsValidator],
  exports: [LogsService]
})
export class LogsModule {}
