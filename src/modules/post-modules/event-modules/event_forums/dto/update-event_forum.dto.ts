import { PartialType } from '@nestjs/mapped-types';
import { CreateEventForumDto } from './create-event_forum.dto';

export class UpdateEventForumDto extends PartialType(CreateEventForumDto) {}
