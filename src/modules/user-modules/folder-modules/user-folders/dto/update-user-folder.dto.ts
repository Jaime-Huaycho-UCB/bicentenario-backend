import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserFolderDto } from './create-user-folder.dto';
import { DtoResponse } from 'src/common/helpers/classes.dto';
import { UserFolderDto } from './user-folder.dto';

export class UpdateUserFolderDto {
    @ApiProperty({description: 'Nuevo nombre de la coleccion',type: String,nullable: false})
    name: string
}

export class UpdateUserFolderOutDto extends DtoResponse{
    @ApiProperty({description: 'Coleccion actualizada',type: UserFolderDto,nullable: false})
    folderUpdated: UserFolderDto
}
