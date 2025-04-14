import { PartialType } from '@nestjs/mapped-types';
import { CreateFolderPostDto } from './create-folder-post.dto';

export class UpdateFolderPostDto extends PartialType(CreateFolderPostDto) {}
