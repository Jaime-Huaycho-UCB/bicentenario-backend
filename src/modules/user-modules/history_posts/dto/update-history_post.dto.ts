import { PartialType } from '@nestjs/mapped-types';
import { CreateHistoryPostDto } from './create-history_post.dto';

export class UpdateHistoryPostDto extends PartialType(CreateHistoryPostDto) {}
