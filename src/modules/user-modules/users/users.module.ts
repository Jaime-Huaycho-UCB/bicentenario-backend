import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HashService } from "src/common/helpers/hash.helper";
import { User } from "./entities/user.entity";
import { UserAuthService } from "./services/users-auth.service";
import { Module } from "@nestjs/common";
import { UsersService } from "./services/users.service";
import { UsersController } from "./users.controller";
import { UsersValidator } from "./services/users.validator";
import { ConfigModule } from "src/config/config.module";


@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule,
        ConfigModule
    ],
    providers: [UsersService,UserAuthService,HashService,UsersValidator],
    controllers: [UsersController],
    exports: [UsersService,UserAuthService]
})
export class UsersModule {}