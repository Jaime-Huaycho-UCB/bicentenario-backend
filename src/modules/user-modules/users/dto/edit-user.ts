import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { DtoResponse } from 'src/common/helpers/classes.dto';
import { DtoUser } from './user.dto';

export class DtoOutEditUser extends DtoResponse{    
    @ApiProperty({description: 'Objeto de usuario editado',type: DtoUser,nullable: false})
    editedUser: DtoUser
}
export class DtoInEditUser {
    @ApiProperty({description: 'Id del usuario a aditar',type: Number,nullable: false})
    id: number

    @ApiProperty({description: 'Nombre del usuario a editar',type: String,nullable: false})
    name: string

    @ApiProperty({description: 'Correo del usuario a editar',type: String,nullable: false})
    email: string

    @ApiProperty({description: 'Contrasena del usuario a editar',type: String,nullable: false})
    password: string
}