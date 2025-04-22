import { Global, Module } from "@nestjs/common";
import { AuthService } from "./services/auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { AuthGuard } from "./services/auth.guard";
import { ConfigModule } from '../../config/config.module';
import { AuthValidator } from "./services/auth.validator";
import { MyConfigService } from "src/config/config.service";
import { EmailModule } from "src/micro-services/email/email.module";
import { UsersModule } from "../user-modules/users/users.module";
import { HashService } from "src/common/helpers/hash.helper";

@Global()
@Module({
    imports: [
        ConfigModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [MyConfigService],
            useFactory: (config: MyConfigService) => {
                const jwtConfig = config.getJwtConfig();
                console.log('✅ JWT_SECRET:', jwtConfig.secret);
                console.log('⏱️ JWT_EXPIRE:', jwtConfig.expiresIn);
                return {
                    global: true,
                    secret: jwtConfig.secret || 'secret',
                    signOptions: {
                        expiresIn: jwtConfig.expiresIn || '1h',
                    },
                };
            },
        }),
        UsersModule,
        EmailModule,
    ],
    providers: [AuthService, AuthGuard, AuthValidator,HashService],
    controllers: [AuthController],
    exports: [AuthService, AuthGuard,JwtModule]
})
export class AuthModule { }