import { ApiProperty } from "@nestjs/swagger";
import { DtoCodeResponse } from "src/common/helpers/classes.dto";
import { CommentDto } from "./comment.dto";

export class GetCommentResponsesDto extends DtoCodeResponse {
    @ApiProperty({description: 'Respuesta del comentario o de otro comentario',type: [CommentDto],nullable: false})
    responses: CommentDto[]
}