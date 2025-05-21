import { ApiProperty } from "@nestjs/swagger";
import { DtoResponse } from "src/common/helpers/classes.dto";
import { UserFolderDto } from "./user-folder.dto";

export class CreateUserFolderDto {
    @ApiProperty({description: 'Id del usuario',type: Number,nullable: false})
    idUser: number

    @ApiProperty({description: 'Nombre de la coleccion',type: String,nullable: false})
    name: string
}

export class CreateUserFolderOutDto extends DtoResponse {
    @ApiProperty({description: 'Folder creado',type: UserFolderDto,nullable: false})
    folderSaved: UserFolderDto
}
