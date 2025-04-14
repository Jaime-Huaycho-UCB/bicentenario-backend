import { PartialType } from '@nestjs/mapped-types';
import { CreatePostForumMessageDto } from './create-post-forum-message.dto';

export class UpdatePostForumMessageDto extends PartialType(CreatePostForumMessageDto) {}
