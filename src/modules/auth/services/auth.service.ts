import { HttpException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
// import { EmailService } from "src/Services/Email/Email.service";
import { generateCode } from "../auth.util";
import { htmlRestorePassword, htmlTwoFactorVerification } from "../auth.template";
import { DtoInLogin, DtoVerify2AF } from "../DTOs/auth-in.dto";
import { AuthValidator } from "./auth.validator";
import { OAuth2Client } from "google-auth-library";
import { UserAuthService } from "src/modules/user-modules/users/services/users-auth.service";
import { UsersService } from "src/modules/user-modules/users/services/users.service";
import { EmailService } from "src/micro-services/email/email.service";
import { LogsService } from "src/modules/logs/services/logs.service";
import { LogEventEnum } from "src/modules/logs/enums/log-event.enum";
import { MyConfigService } from "src/config/config.service";


@Injectable()
export class AuthService {
    private client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID || '');
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService,
        private readonly emailService: EmailService,
        private readonly authValidator: AuthValidator,
        private readonly userAuthService: UserAuthService,
        private readonly logsService: LogsService,
        private configService: MyConfigService,
    ) { }

    async login(data: DtoInLogin) {
        this.authValidator.validateInLogin(data);
        const user = await this.userService.getAUser(data.email,true);
        this.authValidator.validatePasswordToGoogle(user);
        await this.authValidator.validatePasswordCorrect(data.password, user!.password);

        if (user!.rol.id === 1 || user!.rol.id === 2){
            const token2AF = await this.jwtService.signAsync({
                user: {
                    id: user!.id,
                    rol: user!.rol
                }
            })
            const code2AF = await this.generate6DigitCode();
            const email = await this.emailService.sendEmail({
                destination: user!.email,
                title: 'Verificacion de 2 pasos',
                html: htmlTwoFactorVerification(code2AF)
            })
            return {
                required2AF: true,
                code: code2AF,
                token2AF: token2AF
            }
        }

        const payload = {
            idUser: user!.id,
            email: user!.email,
            rol: user!.rol
        };
        const secret = this.configService.getJwtConfig().secret ?? 'defaultSecret';
        const token = await this.jwtService.signAsync(payload, { secret: secret });
        await this.logsService.create({
            user: user!,
            idEvent: LogEventEnum.Acceder,
            description: `El usuario "${user!.name}" con correo "${user!.email}" inicio sesion`
        })
        return {
            required2AF: false,
            token: token,
            idUser: user!.id,
            rol: user!.rol
        };
    }

    async verify2AF(data: DtoVerify2AF){
        const secret = this.configService.getJwtConfig().secret;
        console.log(secret);
        let payloadIn;
        try {
            payloadIn = await this.jwtService.verifyAsync(data.token2AF, {
                secret: secret ?? 'secret'
            });
        } catch (error) {
            throw new HttpException('Tiempo para verificaion de 2 pasos expirado o token invalido',400)
        }
        const user = await this.userService.getAUserById(payloadIn.user.id);
        const payload = {
            idUser: user!.id,
            email: user!.email,
            rol: user!.rol
        };
        const token = await this.jwtService.signAsync(payload);
        await this.logsService.create({
            user: user!,
            idEvent: LogEventEnum.Acceder,
            description: `El usuario "${user!.name}" con correo "${user!.email}" inicio sesion`
        })
        return {
            required2AF: false,
            token: token,
            idUser: user!.id,
            rol: user!.rol
        };

    }

    async restorePassword(email: string) {
        this.authValidator.validateEmail(email);
        const comp = await this.userService.getAUser(email);
        const codeAuth = await generateCode();
        const template = htmlRestorePassword(codeAuth);
        const emailResponse = await this.emailService.sendEmail({
            destination: email,
            title: 'Restauracion de contrasena',
            html: template
        });
        return {
            codeAuth: codeAuth,
            emailResponse: emailResponse
        }
    }

    async googleLogin(idToken: string) {
        const payload = await this.getPayload(idToken);
        let user;
        try {
            user = await this.userService.getAUser(payload!.email!);
        } catch (error) {
            user = await this.userAuthService.registerUser({
                email: payload!.email!,
                name: payload!.name!,
                age: 20
            });
        }
        const payloadOut = {
            idUser: user!.id,
            email: user!.email,
            rol: user!.rol
        };
        const token = await this.jwtService.signAsync(payloadOut);
        await this.logsService.create({
            user: user!,
            idEvent: LogEventEnum.Acceder,
            description: `El usuario "${user!.name}" con correo "${user!.email}" inicio sesion con google`
        })
        return { token: token };
    }

    async googleRegister(idToken: string) {
        const payload = await this.getPayload(idToken);
        let user = await this.userAuthService.registerUser({
            email: payload!.email!,
            name: payload!.name!,
            age: 20
        });
        const payloadOut = {
            idUser: user.id,
            email: user.email,
            rol: user.rol,
        };
        const token = await this.jwtService.signAsync(payloadOut);
        await this.logsService.create({
            user: user!,
            idEvent: LogEventEnum.Acceder,
            description: `El usuario "${user!.name}" con correo "${user!.email}" se registro en el sistema con google`
        })
        return { token: token };
    }

    private async getPayload(idToken){
        this.authValidator.validateIdToken(idToken);
        const ticket = await this.client.verifyIdToken({
            idToken,
            audience: `${process.env.GOOGLE_CLIENT_ID}.apps.googleusercontent.com`,
        });
        const payload = ticket.getPayload();
        this.authValidator.validatePayload(payload);
        return payload!;
    }
    async generate6DigitCode(){
        const code = Math.floor(100000 + Math.random() * 900000);
        return code;
    };
}