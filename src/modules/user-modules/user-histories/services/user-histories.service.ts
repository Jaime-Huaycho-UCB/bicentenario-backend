import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateUserHistoryDto } from '../dto/create-user-history.dto';
import { UpdateUserHistoryDto } from '../dto/update-user-history.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserHistory } from '../entities/user-history.entity';
import { Repository } from 'typeorm';
import { UserHistoriesValidator } from './user-histories.validator';
import { UsersService } from '../../users/services/users.service';
import { PostsService } from 'src/modules/post-modules/posts/services/posts.service';

@Injectable()
export class UserHistoriesService {
	constructor(
		@InjectRepository(UserHistory)
		private readonly userHistoryRepository: Repository<UserHistory>,
		private readonly userHistoriesValidator: UserHistoriesValidator,
		private readonly usersService: UsersService,
		@Inject(forwardRef(() => PostsService))
		private readonly postsService: PostsService
	){}

	async create(data: CreateUserHistoryDto,onPost: any = null,onUser: any = null) {
		let user;
		let post;
		if (!onPost){
			user = await this.usersService.getAUserById(data.idUser);
		}else{
			user = onUser;
		}
		if (!onUser){
			post = await this.postsService.findOne(data.idPost);
		}else{
			post = onPost;
		}
		const history = new UserHistory();
		history.user = user!;
		history.post = post!;
		const historySaved = await this.userHistoryRepository.save(history);
		return historySaved;
	}

	async findAll(idUser: number,
		relations: {
			post?: boolean
		} = {}
	) {
		this.userHistoriesValidator.validateIdUser(idUser);
		const histories = await this.userHistoryRepository.find({
			where: {
				isDeleted: false,
				user: {
					id: idUser
				}
			},
			relations: {
				...(relations.post ? {
					post: {
						file: true,
						city: {
							departament: true,
						},
						user: true,
						miniature: true,
						tags: true
					}
				}:{})
			},
			select: {
				id: true,
				createdAt: true,
				...(relations.post ? {
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
				}:{})
			},
			order: {
				createdAt: 'DESC'
			}
		})
		this.userHistoriesValidator.validateHistories(histories);
		return histories;
	}

	async findOne(
		idHistory: number
	) {
		this.userHistoriesValidator.validateIdHistory(idHistory);
		const history = await this.userHistoryRepository.findOne({
			where: {
				isDeleted: false,
				id: idHistory
			},
		})
		this.userHistoriesValidator.validateHistory(history);
		return history;
	}

	async update(id: number, updateUserHistoryDto: UpdateUserHistoryDto) {
		return `This action updates a #${id} userHistory`;
	}

	async remove(idHistory: number) {
		this.userHistoriesValidator.validateIdHistory(idHistory);
		const history = await this.findOne(idHistory);
		history!.isDeleted = true;
		const historySaved = await this.userHistoryRepository.save(history!);
		return historySaved;
	}
}
