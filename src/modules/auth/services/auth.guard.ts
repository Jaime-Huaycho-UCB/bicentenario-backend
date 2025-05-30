import { CanActivate, ExecutionContext, HttpException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Request } from 'express';
import { MyConfigService } from "src/config/config.service";
import { RolsDecoratorService } from "src/modules/user-modules/rols/rols-decorator/rols-decorator.service";
import { Rols } from "src/modules/user-modules/rols/rols-decorator/rols.decorator";
import { UsersService } from "src/modules/user-modules/users/services/users.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private jwtService: JwtService,
        private configService: MyConfigService,
        private reflector: Reflector,
        private rolsDecoratorService: RolsDecoratorService,
        private usersService: UsersService
    ) { }

    async canActivate(context: ExecutionContext) {
        const rols = this.reflector.get(Rols, context.getHandler())
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new HttpException({
                code: 401,
                message: 'Sin sesion'
            }, 401);
        }
        let payload;
        try {
            const secret = this.configService.getJwtConfig().secret;
            payload = await this.jwtService.verifyAsync(token, {
                secret: secret ?? 'secret'
            });
            console.log(payload);
            request['user'] = payload;
        } catch (error) {
            throw new HttpException({
                code: 401,
                message: 'Sesion expirada'
            }, 401);
        }
        if (!(await this.isAllowed(rols, payload.idUser))) {
            throw new HttpException({
                code: 403,
                message: 'El usuario no tiene permisos para el recurso'
            }, 403);
        }
        return true;
    }

    private extractTokenFromHeader(request: Request) {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }

    private async isAllowed(rols: string[], idUser: number) {
        let user;
        try {
            user = await this.usersService.getAUserById(idUser);
        } catch (error) {
            throw new HttpException({
                code: 404,
                message: error.getResponse()
            },404)
        }
        console.log(rols,user!.rol.id);
        let flag = false;
        rols.map((rol) => {
            if ((this.rolsDecoratorService.getId(rol)) === user!.rol.id) {
                flag = true;
                return;
            }
        })
        
        return flag;
    }
}
