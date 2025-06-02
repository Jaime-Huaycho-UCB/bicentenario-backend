import { PartialType } from '@nestjs/mapped-types';
import { CreateEventForumDto } from './create-event-forum.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEventForumDto {
    @ApiProperty({ description: 'Titulo del foro', type: String })
    title: string

    @ApiProperty({ description: 'Descripcion del foro', type: String })
    description: string
}
