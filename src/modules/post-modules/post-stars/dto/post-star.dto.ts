import { ApiProperty } from "@nestjs/swagger";

export class PostStarDto {
    @ApiProperty({description: 'Numero de estrellas calificadas al testimonio',type: Number,nullable: false})
    number: number

    @ApiProperty({description: 'Fecha de calificacion',type: Date,nullable: false})
    createdAt: Date
}