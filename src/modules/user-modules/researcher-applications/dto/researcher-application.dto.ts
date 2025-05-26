import { ApiProperty } from "@nestjs/swagger";
import { DtoUserName } from "../../users/dto/user.dto";
import { string } from "joi";

export class ResearcherApplicationDto {
    @ApiProperty({description: 'Id de la solicitid',type: Number,nullable: false})
    id: number

    @ApiProperty({description: 'Usuario que envio la solicitud',type: DtoUserName,nullable: false})
    user: DtoUserName

    @ApiProperty({description: 'Justificacion de la solicitud',type: String,nullable: false})
    justification: string

    @ApiProperty({description: 'Fecha de envio de solicitud',type: Date,nullable: false})
    createdAt: Date
}