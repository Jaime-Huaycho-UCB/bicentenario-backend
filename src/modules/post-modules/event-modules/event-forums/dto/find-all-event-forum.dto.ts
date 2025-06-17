import { ApiProperty } from "@nestjs/swagger";
import { EventForumDto } from "./event-forum.dto";
import { DtoCodeResponse } from "src/common/helpers/classes.dto";

export class FindAllEventForumsDto extends DtoCodeResponse{
    @ApiProperty({description: 'Foros',type: [EventForumDto]})
    forums: EventForumDto[]

    @ApiProperty({description: 'Total',type: Number})
    total: number

    @ApiProperty({description: 'Pagina actual',type: Number})
    page: number

    @ApiProperty({description: 'Cantidad limite de mensajes obtenidas por pagina',type: Number})
    limit: number

    @ApiProperty({description: 'Total paginas del foro',type: Number})
    pages: number
}