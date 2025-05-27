import { Body, Controller, Post, Put, Res } from "@nestjs/common";
import { AuthService } from "./services/auth.service";
import { Response } from "express";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { DtoInChangePassword, DtoInLogin, DtoInRegisterUser, DtoInRestorePassword } from "./DTOs/auth-in.dto";
import { DtoOutLogin, DtoOutRegisterUser, DtoOutRestorePassword } from "./DTOs/auth.out.dto";
import { DtoResponse, swaggerRes500 } from "src/common/helpers/classes.dto";
import { responseError } from "src/common/helpers/out.helper";
import { UserAuthService } from "../user-modules/users/services/users-auth.service";

@ApiTags('Autenticacion')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userAuthService: UserAuthService,
    ) { }

    @Post('/login')
    @ApiOperation({ summary: 'Api para el inicio de sesion en la app' })
    @ApiResponse({
        description: 'Respuesta en caso de credenciales correctas',
        status: 200,
        type: DtoOutLogin
    })
    @ApiResponse({
        description: 'Respuesta en caso de usuario no registrado',
        status: 400,
        type: DtoResponse
    })
    @ApiResponse({
        description: 'Respuesta en caso contrasena incorrecta',
        status: 401,
        type: DtoResponse
    })
    @ApiResponse(swaggerRes500())
    async login(@Body() data: DtoInLogin, @Res() res: Response) {
        try {
            const token = await this.authService.login(data);
            return res.status(200).json({
                code: 200,
                message: 'Inicio de sesion exitoso',
                ...token
            });
        } catch (error) {
            return responseError(error,res);
        }
    }

    @Post('login-google')
    @ApiOperation({ summary: 'Api para el inicio de sesion con google' })
    @ApiResponse({
        description: 'Respuesta en caso de credenciales correctas',
        status: 200,
        type: DtoOutLogin
    })
    @ApiResponse({
        description: 'Respuesta en caso de token invalido',
        status: 401,
        type: DtoResponse
    })
    @ApiResponse(swaggerRes500())
    async loginWithGoogle(@Body() data,@Res() res: Response){
        try {
            const token = this.authService.googleLogin(data.idToken);
            return res.status(200).json({
                code: 200,
                message: 'Inicio de sesion exitoso',
                token: token
            });
        } catch (error) {
            return responseError(error,res);
        }
    }

    @Post('/register')
    @ApiOperation({ summary: 'Api para registrar a nuevos usuarios' })
    @ApiResponse({
        description: 'Respuesta en caso de exito al registrar al usuario',
        status: 201,
        type: DtoOutRegisterUser
    })
    @ApiResponse(swaggerRes500())
    async registerUser(@Body() data: DtoInRegisterUser, @Res() res: Response) {
        try {
            const savedUser = await this.userAuthService.registerUser(data);
            return res.status(200).json({
                code: 201,
                user: savedUser,
                message: 'El usuario se registro exitosamente'
            });
        } catch (error) {
            return responseError(error,res);
        }
    }

    @Post('/register-google')
    @ApiOperation({ summary: 'Api para registrar a nuevos usuarios con google' })
    @ApiResponse({
        description: 'Respuesta en caso de exito al registrar al usuario con google',
        status: 201,
        type: DtoOutRegisterUser
    })
    @ApiResponse(swaggerRes500())
    async registerUserWithGoogle(@Body() data,@Res() res: Response){
        try {
            const savedUser = await this.authService.googleRegister(data.idToken);
            return res.status(201).json({
                code: 201,
                user: savedUser,
                message: 'El usuario se registro exitosamente'
            });
        } catch (error) {
            return responseError(error,res);
        }
    }


    @Post('/restore-password')
    @ApiOperation({ summary: 'Api para la restaruracoin de contrasena' })
    @ApiResponse({
        description: 'Respuesta en caso de haberse enviado correctamente lel codigo de verificacion',
        status: 200,
        type: DtoOutRestorePassword
    })
    @ApiResponse({
        description: 'Respuesta en caso de faltar el correo a el cual restaurar contrasena',
        status: 400,
        type: DtoResponse
    })
    @ApiResponse({
        description: 'Respuesta en caso de correo no registrado',
        status: 404,
        type: DtoResponse
    })
    @ApiResponse(swaggerRes500())
    async restorePassword(@Body() data: DtoInRestorePassword, @Res() res: Response) {
        try {
            const result = await this.authService.restorePassword(data.email);
            return res.status(200).json({
                code: 200,
                message: 'El correo se envio exitosamente a su correo',
                ...result
            });
        } catch (error) {
            return responseError(error,res);
        }
    }

    @Put('/change-password')
    @ApiOperation({ summary: 'Api para cambiar la contrsena de un usuario' })
    @ApiResponse({
        description: 'Respuesta en caso de cambiarse exitosamente la contrasena',
        status: 200,
        type: DtoResponse
    })
    @ApiResponse({
        description: 'Respuetesta en caso de no encontrar el usuario o paramtros',
        status: 404,
        type: DtoResponse
    })
    @ApiResponse({
        description: 'Respuesta en caso de parametros faltantes',
        status: 400,
        type: DtoResponse
    })
    @ApiResponse(swaggerRes500())
    async changePassword(@Body() data: DtoInChangePassword, @Res() res: Response) {
        try {
            const result = await this.userAuthService.changePassword(data);
            return res.status(200).json({
                code: 200,
                message: 'La contrasena se cambio exitosamente'
            });
        } catch (error) {
            return responseError(error,res);
        }
    }
}