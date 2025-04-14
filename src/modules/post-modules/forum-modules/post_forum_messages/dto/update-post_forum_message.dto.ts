import { PartialType } from '@nestjs/mapped-types';
import { CreatePostForumMessageDto } from './create-post_forum_message.dto';

export class UpdatePostForumMessageDto extends PartialType(CreatePostForumMessageDto) {}
