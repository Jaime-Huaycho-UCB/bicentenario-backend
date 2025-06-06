import { Module } from '@nestjs/common';
import { FilesService } from './services/files.service';
import { FilesController } from './files.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { File } from './entities/files.entity'
import { FilesValidator } from './services/files.validator';

@Module({
	imports: [
		TypeOrmModule.forFeature([File])
	],
	controllers: [FilesController],
	providers: [FilesService,FilesValidator],
	exports: [FilesService]
})
export class FilesModule { }
