import { Injectable } from '@nestjs/common';
import { CreateUserDownloadDto } from '../dto/create-user-download.dto';
import { UpdateUserDownloadDto } from '../dto/update-user-download.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDownload } from '../entities/user-download.entity';
import { Repository } from 'typeorm';
import { UserDownloadsValidator } from './user-downloads.validator';
import { UsersService } from '../../users/services/users.service';
import { PostsService } from 'src/modules/post-modules/posts/services/posts.service';

@Injectable()
export class UserDownloadsService {
	constructor(
		@InjectRepository(UserDownload)
		private readonly userDownloadRepository: Repository<UserDownload>,
		private readonly userDownloadsValidator: UserDownloadsValidator,
		private readonly usersService: UsersService,
		private readonly postsService: PostsService
	) { }

	async create(data: CreateUserDownloadDto) {
		const user = await this.usersService.getAUserById(data.idUser);
		const post = await this.postsService.findOne(data.idPost);
		const download = new UserDownload();
		download.user = user!;
		download.post = post!;
		return await this.userDownloadRepository.save(download);
	}

	async findAll(filters: {
		idUser?: number,
		idPost?: number,
		limit?: number,
		page?: number,
		createdAt?: string
	} = {}) {
		if (filters.idUser !== undefined && !isNaN(Number(filters.idUser))) {
			await this.usersService.getAUserById(filters.idUser);
		}
		if (filters.idPost !== undefined && !isNaN(Number(filters.idPost))) {
			await this.postsService.findOne(filters.idPost);
		}
		const page = isNaN(Number(filters.page)) ? 1 : Number(filters.page);
		const limit = isNaN(Number(filters.limit)) ? 10 : Number(filters.limit);
		const skip = (page - 1) * limit;
		const [downloads, total] = await this.userDownloadRepository.findAndCount({
			where: {
				...(filters.idUser !== undefined && !isNaN(Number(filters.idUser)) ? {
					user: {
						id: filters.idUser
					}
				} : {}),
				...(filters.idPost !== undefined && !isNaN(Number(filters.idPost)) ? {
					post: {
						id: filters.idPost
					}
				} : {})
			},
			relations: {
				user: true,
				post: {
					user: true,
					city: {
						departament: true,
					},
					file: true,
					miniature: true,
					tags: true
				}
			},
			select: {
				user: {
					id: true,
					name: true,
				},
				post: {
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
			},
			order: {
				...(filters.createdAt ? {
					createdAt: (filters.createdAt === 'ASC' ? 'ASC' : 'DESC')
				} : {
					createdAt: 'DESC'
				})
			},
			skip: skip,
			take: limit,
		})
		this.userDownloadsValidator.validateDownloads(downloads);
		return {
			downloads: downloads,
			total: total,
			page: page,
			limit: limit,
			pages: Math.ceil(total / limit)
		};;
	}

	findOne(id: number) {
		return `This action returns a #${id} userDownload`;
	}

	update(id: number, updateUserDownloadDto: UpdateUserDownloadDto) {
		return `This action updates a #${id} userDownload`;
	}

	remove(id: number) {
		return `This action removes a #${id} userDownload`;
	}
}
