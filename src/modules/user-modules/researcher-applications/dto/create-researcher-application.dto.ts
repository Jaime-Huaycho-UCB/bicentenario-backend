import { ApiProperty } from "@nestjs/swagger";
import { string } from "joi";

export class CreateResearcherApplicationDto {
    @ApiProperty({description: 'Id del usuario',type: Number,nullable: false})
    idUser: number

    @ApiProperty({description: 'Justificacionde la aplicacion',type: String,nullable: false})
    justification: string
}
