import { ApiProperty } from "@nestjs/swagger";
import { DtoCodeResponse } from "src/common/helpers/classes.dto";
import { PostForumDto } from "./post-forum.dto";

export class FindAllPostForums extends DtoCodeResponse{
    @ApiProperty({description: 'Foros',type: [PostForumDto]})
    forums: PostForumDto[]

    @ApiProperty({description: 'Total',type: Number})
    total: number

    @ApiProperty({description: 'Pagina actual',type: Number})
    page: number

    @ApiProperty({description: 'Cantidad limite de mensajes obtenidas por pagina',type: Number})
    limit: number

    @ApiProperty({description: 'Total paginas del foro',type: Number})
    pages: number
}