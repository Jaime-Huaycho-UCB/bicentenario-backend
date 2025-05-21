import { ApiProperty } from "@nestjs/swagger";
import { DtoCodeResponse } from "src/common/helpers/classes.dto";
import { CommentInteractionDto } from "./comment-interaction.dto";

export class FindOneCommentInteractionDto extends DtoCodeResponse{
    @ApiProperty({description: 'Interaccion del usuario',type: CommentInteractionDto,nullable: false})
    interaction: CommentInteractionDto
}