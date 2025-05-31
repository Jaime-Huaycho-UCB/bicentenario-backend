import { PartialType } from '@nestjs/mapped-types';
import { CreatePostForumDto } from './create-post-forum.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostForumDto {
    @ApiProperty({ description: 'Titulo del foro', type: String })
    title: string

    @ApiProperty({ description: 'Descripcion del foro', type: String })
    description: string
}
