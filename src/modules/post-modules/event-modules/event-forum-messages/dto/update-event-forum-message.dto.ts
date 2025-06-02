import { PartialType } from '@nestjs/swagger';
import { CreateEventForumMessageDto } from './create-event-forum-message.dto';

export class UpdateEventForumMessageDto extends PartialType(CreateEventForumMessageDto) {}
