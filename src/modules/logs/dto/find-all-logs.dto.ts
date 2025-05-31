import { ApiProperty } from "@nestjs/swagger";
import { DtoCodeResponse } from "src/common/helpers/classes.dto";
import { LogDto } from "./log.dto";

export class FindAllLogsDto extends DtoCodeResponse{
    @ApiProperty({description: 'Logs obtenidos',type: [LogDto]})
    logs: LogDto[]

    @ApiProperty({description: 'Total de mensajes del foro',type: Number})
    total: number

    @ApiProperty({description: 'Pagina actual',type: Number})
    page: number

    @ApiProperty({description: 'Cantidad limite de mensajes obtenidas por pagina',type: Number})
    limit: number

    @ApiProperty({description: 'Total paginas del foro',type: Number})
    pages: number
}