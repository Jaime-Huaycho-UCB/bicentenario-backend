import { PartialType } from '@nestjs/mapped-types';
import { CreateFolderPostDto } from './create-folder_post.dto';

export class UpdateFolderPostDto extends PartialType(CreateFolderPostDto) {}
