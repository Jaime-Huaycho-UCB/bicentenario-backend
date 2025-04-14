import { PartialType } from '@nestjs/mapped-types';
import { CreatePostForumDto } from './create-post-forum.dto';

export class UpdatePostForumDto extends PartialType(CreatePostForumDto) {}
