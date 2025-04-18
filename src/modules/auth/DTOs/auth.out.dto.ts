import { ApiProperty } from "@nestjs/swagger";
import { DtoResponse } from "src/common/helpers/classes.dto";
import { DtoUser } from "src/modules/user-modules/users/dto/user.dto";


export class DtoOutLogin extends DtoResponse{
    @ApiProperty({description: 'Token del usuario para la sesion',type: String,nullable: false})
    token: string
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