import { PartialType } from '@nestjs/mapped-types';
import { CreateEventForumMessageDto } from './create-event_forum_message.dto';

export class UpdateEventForumMessageDto extends PartialType(CreateEventForumMessageDto) {}
