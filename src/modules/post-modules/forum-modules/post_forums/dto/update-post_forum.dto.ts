import { PartialType } from '@nestjs/mapped-types';
import { CreatePostForumDto } from './create-post_forum.dto';

export class UpdatePostForumDto extends PartialType(CreatePostForumDto) {}
