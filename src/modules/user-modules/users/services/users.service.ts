import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { UsersValidator } from "./users.validator";
import { DtoInEditUser } from "../dto/edit-user";

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>,
		private readonly usersValidator: UsersValidator
	) { }

	async getAUser(email: string, showPass = false) {
		this.usersValidator.validateEmail(email);
		const user = await this.userRepository.findOne({
			where: {
				isDeleted: false,
				email: email
			},
			...(showPass ? {
				select: ['id', 'name', 'email', 'password', 'rol']
			} : {
				select: ['id', 'name', 'email', 'rol']
			}),
			relations: {
				rol: true
			}

		});

		this.usersValidator.validateUser(user);
		return user;
	}

	async getAUserById(id: number, showPass = false) {
		this.usersValidator.validateId(id);
		const user = await this.userRepository.findOne({
			where: {
				isDeleted: false,
				id: id
			},
			...(showPass ? {
				select: ['id', 'name', 'email', 'password', 'rol']
			} : {
				select: ['id', 'name', 'email', 'rol']
			})
		})

		this.usersValidator.validateUser(user);

		return user;
	}

	async getUsers() {
		const users = await this.userRepository.find({
			where: {
				isDeleted: false
			},
			order: {
				updatedAt: 'DESC'
			},
			relations: {
				rol: true
			},
			select: ['id', 'name', 'email', 'rol', 'updatedAt', 'createdAt']
		});
		this.usersValidator.validateUsers(users);
		return users;
	}

	async editUser(data: DtoInEditUser) {
		this.usersValidator.validateInEditUser(data);
		const user = await this.userRepository.findOne({
			where: {
				id: data.id
			}
		});

		this.usersValidator.validateUser(user);

		if (data.name) { user!.name = data.name; }
		if (data.email) { user!.email = data.email; }
		if (data.password) { user!.password = data.password; }

		const editedUser = await this.userRepository.save(user!);
		return editedUser;
	}

	async deleteUser(id: number) {
		this.usersValidator.validateId(id);
		const user = await this.getAUserById(id);

		user!.isDeleted = true;

		await this.userRepository.save(user!);

		return true;
	}
}