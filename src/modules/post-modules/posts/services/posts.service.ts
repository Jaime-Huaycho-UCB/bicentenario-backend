import { Injectable } from '@nestjs/common';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../entities/post.entity';
import { In, IsNull, Like, Not, Repository } from 'typeorm';
import { PostsValidator } from './posts.validator';
import { UsersService } from 'src/modules/user-modules/users/services/users.service';
import { CitiesService } from 'src/modules/location-modules/cities/services/cities.service';
import { FilesService } from 'src/modules/files/services/files.service';
import { StorageService } from 'src/micro-services/storage/storage.service';
import { PostStatusesService } from '../../post-statuses/services/post-statuses.service';
import { EventsService } from '../../event-modules/events/services/events.service';
import { PostTagsService } from '../../tag-modules/post-tags/post-tags.service';
import { TagsService } from '../../tag-modules/tags/tags.service';

@Injectable()
export class PostsService {
	constructor(
		@InjectRepository(Post)
		private readonly postRepository: Repository<Post>,
		private readonly postsValidator: PostsValidator,
		private readonly usersService: UsersService,
		private readonly citiesService: CitiesService,
		private readonly filesService: FilesService,
		private readonly storageService: StorageService,
		private readonly postStatusesService: PostStatusesService,
		private readonly eventsService: EventsService,
		private readonly postTagsService: PostTagsService,
		private readonly tagsService: TagsService
	) { }

	async create(data: CreatePostDto, file: Express.Multer.File) {
		this.postsValidator.validateCreatePost(data);
		const idUser = this.postsValidator.validateIdUser(data.idUser);
		const idCity = this.postsValidator.validateIdCity(data.idCity);
		const type = this.postsValidator.validateType(data.type);
		let tags: number[] = [];
		if (data.tags) {
			tags = await this.postsValidator.validateTags(data.tags);
		}

		const user = await this.usersService.getAUserById(idUser);
		const city = await this.citiesService.findOne(idCity);
		let fileRegistered;
		if (file != null) {
			const fileSaved = await this.storageService.uploadFile(file);
			fileRegistered = await this.filesService.create(fileSaved);
		}
		const status = await this.postStatusesService.findOne(1);
		let event;
		if ((data.idEvent)) {
			event = await this.eventsService.findOne(parseInt(data.idEvent));
		}
		const post = new Post();
		post.user = user!;
		post.title = data.title;
		post.description = data.description;
		post.city = city!;
		post.type = type;
		if (file) {
			post.file = fileRegistered;
		}
		if (data.content) {
			post.content = data.content;
		}
		post.status = status!;
		post.curator = null;
		if (data.idEvent || event) {
			post.event = event;
		}
		let postTagsSaved: number[] = [];
		const postSaved = await this.postRepository.save(post);
		if (tags.length > 0) {
			postTagsSaved = await this.postTagsService.create(postSaved.id, tags);
		}
		return await this.findOne(`${postSaved.id}`);
	}

	async getSuggestions() {
		const suggestions = await this.postRepository.find({
			where: {
				isDeleted: false,
				head: IsNull()
			},
			select: ['title']
		});

		return suggestions;
	}

	async findAll(filters) {
		console.log(filters)
		const page = filters.page || 1;
		const limit = filters.limit || 10;
		const skip = (page - 1) * limit;

		let tags: number[] = [];
		if (filters.tags) {
			tags = filters.tags.split(',').map((tag) => parseInt(tag));
		}
		const query = this.postRepository.createQueryBuilder('post')
			.leftJoinAndSelect('post.user', 'user')
			.leftJoinAndSelect('post.city', 'city')
			.leftJoinAndSelect('city.departament', 'departament')
			.leftJoinAndSelect('post.file', 'file')
			.leftJoinAndSelect('post.status', 'status')
			.leftJoinAndSelect('post.event', 'event')
			.leftJoinAndSelect('post.tags', 'tags')
			.where('post.isDeleted = false')
			// .andWhere('post.head IS NULL');
		if (filters.search) {
			query.andWhere('post.title ILIKE :search', { search: `%${filters.search}%` });
		}
		if (!isNaN(filters.idCity)) {
			query.andWhere('city.id = :idCity', { idCity: filters.idCity });
		}
		if (!isNaN(filters.idStatus)) {
			query.andWhere('status.id = :idStatus', { idStatus: filters.idStatus });
		}
		if (!isNaN(filters.idEvent)) {
			query.andWhere('event.id = :idEvent', { idEvent: filters.idEvent });
		}
		if (tags.length > 0) {
			query
				.innerJoin('post.tags', 'filterTags')
				.andWhere('filterTags.id IN (:...tagIds)', { tagIds: tags })
				.groupBy('post.id')
				.addGroupBy('user.id')
				.addGroupBy('city.id')
				.addGroupBy('departament.id')
				.addGroupBy('file.id')
				.addGroupBy('status.id')
				.addGroupBy('event.id')
				.addGroupBy('tags.id')
				.having('COUNT(DISTINCT filterTags.id) = :tagCount', { tagCount: tags.length });
		}
		query.orderBy('post.createdAt', 'DESC')
			.addOrderBy('post.stars', 'DESC')
			.addOrderBy('post.likes', 'DESC')
			.skip(skip)
			.take(limit);
		query.select([
			'post.id',
			'post.title',
			'post.description',
			'post.stars',
			'post.views',
			'post.likes',
			'post.dislikes',
			'post.type',
			'post.content',
			'post.createdAt',
			'user.id',
			'user.name',
			'city',
			'departament',
			'file',
			'tags'
		]);
		const [posts, total] = await query.getManyAndCount();
		this.postsValidator.validatePosts(posts);
		return {
			posts: posts,
			total: total,
			page: page,
			limit: limit,
			pages: Math.ceil(total / limit)
		};
	}


	async findOne(id: string,relations = true) {
		const idPost = this.postsValidator.validateIdPost(id);
		
		let post;
		if (relations){
			post = await this.postRepository.createQueryBuilder('post')
			.leftJoinAndSelect('post.user', 'user')
			.leftJoinAndSelect('post.city', 'city')
			.leftJoinAndSelect('city.departament', 'departament')
			.leftJoinAndSelect('post.file', 'file')
			.leftJoinAndSelect('post.tags', 'tags')
			.where('post.id = :id',{id: id})
			.select([
				'post.id',
				'post.title',
				'post.description',
				'post.stars',
				'post.views',
				'post.likes',
				'post.dislikes',
				'post.type',
				'post.content',
				'post.createdAt',
				'user.id',
				'user.name',
				'city',
				'departament',
				'file',
				'tags'
			])
			.getOne();
		}else{
			post = await this.postRepository.findOne({
				where: {
					id: idPost
				}
			})
		}
		this.postsValidator.validatePost(post);
		return post;
	}
	async findOneAll(id: number){
		const post = await this.postRepository.findOne({
			where: {
				id: id
			},
			relations: {
				user: true,
				city: {
					departament: true
				},
				file: true,
				tags: true,
				status: true,
				event: true,
				curator: true,
				
			},
		});
		return post
	}

	async update(idString: string, data: UpdatePostDto,file: Express.Multer.File) {
		const post = await this.findOneAll(parseInt(idString));
		const { id, ...newChildPost } = post!;
		if (data.title){
			post!.title = data.title!;
		}
		if (data.description){
			post!.description = data.description!;
		}
		if (data.idCity){
			const city = await this.citiesService.findOne(parseInt(data.idCity))
			post!.city = city!;
		}
		if (data.type){
			post!.type = this.postsValidator.validateType(data.type!);
		}
		if (file){
			const fileUploaded = await this.storageService.uploadFile(file);
			const newFile = await this.filesService.create(fileUploaded);
			post!.file = newFile;
		}
		if (data.content){
			post!.content = data.content;
		}
		// if (parseInt(data.idEvent!) != post!.event.id && data.idEvent){
		// 	const event = await this.eventsService.findOne(parseInt(data.idEvent!));
		// 	post!.event = event!;
		// }
		newChildPost.head = post!.id;
		let child;
		if (post!.child){
			const foundChild = await this.postRepository.findOne({where: {id: post!.child}});
			if (foundChild) {
				child = foundChild;
			}
			newChildPost.child = post!.child;
		}
		const childPostSaved = await this.postRepository.save(newChildPost);
		if (child){
			child.head = childPostSaved.id
			await this.postRepository.save({...child});
		}
		post!.child = childPostSaved.id;
		await this.postRepository.save(post!);
		return await this.findOne(`${post!.id}`);
	}

	async remove(id: string) {
		const post = await this.findOne(id);
		post!.isDeleted = true;
		await this.postRepository.save(post);
		return true;
	}
}
