import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentInteractionDto } from './create-comment-interaction.dto';

export class UpdateCommentInteractionDto extends PartialType(CreateCommentInteractionDto) {}
