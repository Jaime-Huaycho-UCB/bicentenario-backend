import { ApiProperty } from "@nestjs/swagger";
import { DtoCodeResponse } from "src/common/helpers/classes.dto";
import { UserDownloadDto } from "./user-download.dto";

export class FindAllUserDownloadsDto extends DtoCodeResponse {
    @ApiProperty({description: 'Descargas',type: [UserDownloadDto]})
    downloads: UserDownloadDto[]

    @ApiProperty({description: 'Total de mensajes del foro',type: Number})
    total: number

    @ApiProperty({description: 'Pagina actual',type: Number})
    page: number

    @ApiProperty({description: 'Cantidad limite de mensajes obtenidas por pagina',type: Number})
    limit: number

    @ApiProperty({description: 'Total paginas del foro',type: Number})
    pages: number
}