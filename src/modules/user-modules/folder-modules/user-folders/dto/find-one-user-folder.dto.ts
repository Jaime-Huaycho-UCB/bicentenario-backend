import { ApiProperty } from "@nestjs/swagger";
import { DtoCodeResponse } from "src/common/helpers/classes.dto";
import { UserFolderWithPostsDto } from "./user-folder.dto";

export class FindOneUserFolderDto extends DtoCodeResponse{
    @ApiProperty({description: 'Colecciones del usuario',type: UserFolderWithPostsDto,nullable: false})
        folders: UserFolderWithPostsDto[]
}