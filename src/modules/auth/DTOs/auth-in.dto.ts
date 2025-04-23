import { ApiProperty } from "@nestjs/swagger"

export class DtoInLogin {
    @ApiProperty({description: 'Correo del usuario',type: String,nullable: false})
    email: string

    @ApiProperty({description: 'Contrasena del usuario',type: String,nullable: false})
    password: string
}

export class DtoInRestorePassword {
    @ApiProperty({description: 'Correo del a restaurar contrasena',type: String,nullable: false})
    email: string
}

export class DtoInRegisterUser {
    @ApiProperty({description: 'Nombre del usuario a registrar',type: String,nullable: false})
    name: string

    @ApiProperty({description: 'Correo electronico del usuario a registrar',type: String,nullable: false})
    email: string

    @ApiProperty({description: 'Contrasena del usuarioa resistrar',type: String,nullable: false})
    password?: string

    @ApiProperty({description: "Edad del usuario",type: Number,nullable: false})
    age: number
}

export class DtoInChangePassword {
    @ApiProperty({description: 'Correo al cual cambiar la contrasena',type: String,nullable: false})
    email: string

    @ApiProperty({description: 'Nueva contrasena',type: String,nullable: false})
    password: string
}