import { CanActivate, ExecutionContext, HttpException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from 'express';
import { MyConfigService } from "src/config/config.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private jwtService: JwtService,
        private configService: MyConfigService
    ) { }

    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new HttpException({
                code: 401,
                message: 'Sin sesion'
            },401);
        }
        try {            
            const secret = this.configService.getJwtConfig().secret;
            const payload = await this.jwtService.verifyAsync(token,{
                secret: secret ?? 'secret'
            });
            request['user'] = payload;
        } catch (error){
            throw new HttpException({
                code: 401,
                message: 'Sesion expirada'
            },401);
        }
        return true;
    }

    private extractTokenFromHeader(request: Request) {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}
