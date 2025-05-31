import { ApiProperty } from "@nestjs/swagger";
import { DtoUserName } from "src/modules/user-modules/users/dto/user.dto";

export class LogEventDto {
    @ApiProperty({description: 'Id del evento',type: Number})
    id: number

    @ApiProperty({description: 'Nombre del evento',type: String})
    name: string
}

export class LogDto {
    @ApiProperty({description: 'I del log',type: Number})
    id: number

    @ApiProperty({description: 'Evneto del log',type: LogEventDto})
    event: LogEventDto

    @ApiProperty({description: 'Usuario del log',type: DtoUserName})
    user: DtoUserName

    @ApiProperty({description: 'Descripcion del log',type: String})
    description: string

    @ApiProperty({description: 'Fecha del log',type: Date})
    createdAt: Date
}