import { PartialType } from '@nestjs/mapped-types';
import { CreateEventForumDto } from './create-event-forum.dto';

export class UpdateEventForumDto extends PartialType(CreateEventForumDto) {}
