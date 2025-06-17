import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/modules/user-modules/users/entities/user.entity";
import { LogEventEnum } from "../enums/log-event.enum";

export class CreateLogDto {
    @ApiProperty({description: 'Id del usuario',type: Number})
    user: number | User

    @ApiProperty({description: 'Nombre del evento del log',type: String})
    idEvent: LogEventEnum
    
    @ApiProperty({description: 'Descripcion del log'})
    description: string
}
