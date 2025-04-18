import { Module } from '@nestjs/common';
import { FileService } from './files.service';
import { FileController } from './files.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { File } from './entities/files.entity'

@Module({
	imports: [
		TypeOrmModule.forFeature([File])
	],
	controllers: [FileController],
	providers: [FileService],
})
export class FileModule { }
