import { PartialType } from '@nestjs/mapped-types';
import { CreateHistoryPostDto } from './create-history-post.dto';

export class UpdateHistoryPostDto extends PartialType(CreateHistoryPostDto) {}
