import { ApiProperty } from "@nestjs/swagger";
import { DtoCodeResponse } from "src/common/helpers/classes.dto";
import { TagDto } from "./tag.dto";

export class GetTagsDto extends DtoCodeResponse {
    @ApiProperty({description: 'Etiquetas disponibles',type: [TagDto],nullable: false})
    tags: TagDto[]
}