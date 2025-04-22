import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";
import { UsersService } from "./users.service";
import { DtoInChangePassword, DtoInRegisterUser } from "src/modules/auth/DTOs/auth-in.dto";
import { HashService } from "../../../../common/helpers/hash.helper";
import { UsersValidator } from "./users.validator";

@Injectable()
export class UserAuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly userService: UsersService,
        private readonly hashService: HashService,
        private readonly userValidator: UsersValidator
    ) { }

    async changePassword(data: DtoInChangePassword) {
        this.userValidator.validateEmail(data.email);
        this.userValidator.validatePassword(data.email);
        const user = await this.userService.getAUser(data.email);

        user!.password = await this.hashService.hash(data.password);

        await this.userRepository.save(user!);

        return true;
    }

    async registerUser(data: DtoInRegisterUser) {
        this.userValidator.validateInRegisterUser(data);
        try {
            const comp = await this.userService.getAUser(data.email);
            this.userValidator.validateExistingUser(comp);
        } catch (error) {
            if (error.getStatus() == 409) {
                throw new HttpException(error.getResponse(), error.getStatus());
            }
        }

        const user = {
            name: data.name,
            email: data.email,
            password: data.password ? await this.hashService.hash(data.password!) : undefined,
            age: data.age,
            strikes: 0,
            rol: {id: 2},
            isDeleted: false
        };
        const savedUser = await this.userRepository.save(user);
        return savedUser;
    }
}