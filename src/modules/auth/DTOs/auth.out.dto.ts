import { ApiProperty } from "@nestjs/swagger";
import { number } from "joi";
import { DtoResponse } from "src/common/helpers/classes.dto";
import { RolDto } from "src/modules/user-modules/rols/dto/rol.dto";
import { DtoUser } from "src/modules/user-modules/users/dto/user.dto";


export class DtoOutLogin extends DtoResponse{
    @ApiProperty({description: 'Token del usuario para la sesion',type: String,nullable: false})
    token: string

    @ApiProperty({description: 'Id del usuario',type: Number,nullable: false})
    idUser: number

    @ApiProperty({description: 'Rol del usuario',type: RolDto,nullable: false})
    rol: RolDto
}

export class DtoOutRestorePassword extends DtoResponse{
    @ApiProperty({description: 'Codigo de verificacion de permiso a cambiar contrasena',type: Number,nullable: false})
    codeAuth: number

    @ApiProperty({description: 'respuesta de el servicio de correo',type: Object,nullable: false})
    emailResponse: Object
}

export class DtoOutRegisterUser extends DtoResponse{    
    @ApiProperty({description: 'Objeto de usuario creado',type: DtoUser,nullable: false})
    user: DtoUser
}