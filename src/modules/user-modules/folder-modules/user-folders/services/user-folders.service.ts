import { Injectable } from '@nestjs/common';
import { CreateUserFolderDto } from '../dto/create-user-folder.dto';
import { UpdateUserFolderDto } from '../dto/update-user-folder.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserFolder } from '../entities/user-folder.entity';
import { Repository } from 'typeorm';
import { UserFoldersValidator } from './user-folders.validator';
import { UsersService } from 'src/modules/user-modules/users/services/users.service';

@Injectable()
export class UserFoldersService {
	constructor(
		@InjectRepository(UserFolder)
		private readonly userFolderRepository: Repository<UserFolder>,
		private readonly userFoldersValidator: UserFoldersValidator,
		private readonly usersService: UsersService
	){}

	async create(data: CreateUserFolderDto) {
		this.userFoldersValidator.validateName(data.name);
		const user = await this.usersService.getAUserById(data.idUser);
		const folder = new UserFolder();
		folder.user = user!;
		folder.name = data.name;
		const folderSaved = await this.userFolderRepository.save(folder);
		return {
			id: folderSaved.id,
			name: folderSaved.name,
			createdAt:folderSaved.createdAt
		};
	}

	async findAll(idUser: number) {
		await this.usersService.getAUserById(idUser);
		const folders = await this.userFolderRepository.find({
			where: {
				isDeleted: false,
				user: {
					id: idUser
				}
			},
			select: {
				id: true,
				name: true,
				createdAt: true
			}
		})
		this.userFoldersValidator.validateFolders(folders);
		return folders;
	}

	async findOne(
		idFolder: number,
		relations: {
			posts?: boolean
		} = {}
	) {
		this.userFoldersValidator.validateIdFolder(idFolder);
		const folder = await this.userFolderRepository.findOne({
			where: {
				isDeleted: false,
				id: idFolder
			},
			relations: {
				...(relations.posts ? {
					posts: {
						user: true,
						city: {
							departament: true
						},
						miniature: true,
						file: true,
						tags: true
					}
				}:{})
			},
			select: {
				...(relations.posts ? {
					posts: {
						id: true,
						title: true,
						description: true,
						stars: true,
						views: true,
						likes: true,
						dislikes: true,
						type: true,
						file: true,
						miniature: true,
						content: true,
						createdAt: true,
						user: {
							id: true,
							name: true
						}
					}
				}:{}),
				id: true,
				name: true,
				createdAt: true
			}
		})
		this.userFoldersValidator.validateFolder(folder);
		return folder
	}

	async update(idFolder: number, data: UpdateUserFolderDto) {
		let c=0;
		const folder = await this.findOne(idFolder);
		if (folder!.name !== data.name){
			folder!.name = data.name;
			c+=1;
		}
		if (c==0){
			return folder;
		}
		return await this.userFolderRepository.save(folder!);
	}

	async remove(idFolder: number) {
		const folder = await this.findOne(idFolder);
		folder!.isDeleted = true;
		return await this.userFolderRepository.save(folder!);
	}
}
