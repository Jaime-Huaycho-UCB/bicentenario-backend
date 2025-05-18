import { PartialType } from '@nestjs/swagger';
import { CreatePostStarDto } from './create-post-star.dto';

export class UpdatePostStarDto extends PartialType(CreatePostStarDto) {}
