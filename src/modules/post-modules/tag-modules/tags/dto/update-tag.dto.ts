import { ApiProperty } from '@nestjs/swagger';

export class UpdateTagDto {
    @ApiProperty({description: 'Nuevo nombre de la etiqueta',type: String,nullable: false})
    name: string
}
