import { HttpException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
// import { EmailService } from "src/Services/Email/Email.service";
import { generateCode } from "../auth.util";
import { htmlRestorePassword } from "../auth.template";
import { DtoInLogin } from "../DTOs/auth-in.dto";
import { AuthValidator } from "./auth.validator";
import { OAuth2Client } from "google-auth-library";
import { UserAuthService } from "src/modules/user-modules/users/services/users-auth.service";
import { UsersService } from "src/modules/user-modules/users/services/users.service";
import { EmailService } from "src/micro-services/email/email.service";


@Injectable()
export class AuthService {
    private client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID || '');
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService,
        private readonly emailService: EmailService,
        private readonly authValidator: AuthValidator,
        private readonly userAuthService: UserAuthService
    ) { }

    async login(data: DtoInLogin) {
        this.authValidator.validateInLogin(data);
        const user = await this.userService.getAUser(data.email,true);
        this.authValidator.validatePasswordToGoogle(user);
        await this.authValidator.validatePasswordCorrect(data.password, user!.password);
        const payload = {
            idUser: user!.id,
            email: user!.email,
            rol: user!.rol
        };
        const token = await this.jwtService.signAsync(payload);
        return {
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
}