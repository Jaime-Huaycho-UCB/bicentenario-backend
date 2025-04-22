import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { inPostDto, PostPublicDto } from './post.dto';
import { DtoResponse } from 'src/common/helpers/classes.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostDto extends inPostDto {
}
export class UpdatePostOutDto extends DtoResponse {
    @ApiProperty({description: 'Testimonio actulizado',type: PostPublicDto,nullable: false})
    updatedPost: PostPublicDto
}
