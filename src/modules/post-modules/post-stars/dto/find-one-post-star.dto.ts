import { ApiProperty } from "@nestjs/swagger";
import { DtoCodeResponse } from "src/common/helpers/classes.dto";
import { PostStarDto } from "./post-star.dto";

export class FindOnePostStarDto extends DtoCodeResponse {
    @ApiProperty({description: 'Calificacion del usuario',type: PostStarDto,nullable: false})
    star: PostStarDto
}