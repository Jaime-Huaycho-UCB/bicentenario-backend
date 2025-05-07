import { ApiProperty } from "@nestjs/swagger";
import { DtoCodeResponse } from "src/common/helpers/classes.dto";
import { CommentDto } from "./comment.dto";

export class GetCommentsDto extends DtoCodeResponse{
    @ApiProperty({description: 'Comentario disponibles',type: [CommentDto],nullable: false})
    comments: CommentDto[]
}