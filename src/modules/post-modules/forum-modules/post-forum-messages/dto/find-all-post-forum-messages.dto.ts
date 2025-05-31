import { ApiProperty } from "@nestjs/swagger";
import { DtoCodeResponse } from "src/common/helpers/classes.dto";
import { PostForumMessageDto } from "./post-forum-message.dto";

export class findAllPostForumMessagesDto extends DtoCodeResponse{
    @ApiProperty({description: 'Mensajes del foro',type: [PostForumMessageDto]})
    messages: PostForumMessageDto[]

    @ApiProperty({description: 'Total de mensajes del foro',type: Number})
    total: number

    @ApiProperty({description: 'Pagina actual',type: Number})
    page: number

    @ApiProperty({description: 'Cantidad limite de mensajes obtenidas por pagina',type: Number})
    limit: number

    @ApiProperty({description: 'Total paginas del foro',type: Number})
    pages: number
}