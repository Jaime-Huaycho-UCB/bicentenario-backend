import { ApiProperty } from "@nestjs/swagger";
import { DtoCodeResponse } from "src/common/helpers/classes.dto";
import { UserFolderDto } from "./user-folder.dto";

export class FindAllUserFoldersDto extends DtoCodeResponse{
    @ApiProperty({description: 'Colecciones del usuario',type: [UserFolderDto],nullable: false})
    folders: UserFolderDto[]
}