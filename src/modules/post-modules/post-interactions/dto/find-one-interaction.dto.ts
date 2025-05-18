import { ApiProperty } from "@nestjs/swagger";
import { DtoCodeResponse } from "src/common/helpers/classes.dto";
import { PostInteractionDto } from "./post-interaction.dto";

export class FindOneInteractionDto extends DtoCodeResponse {
    @ApiProperty({description: 'Interaccion del usuario',type: PostInteractionDto,nullable: true})
    interaction: PostInteractionDto
}