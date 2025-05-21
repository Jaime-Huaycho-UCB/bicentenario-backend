import { HttpException, Injectable } from '@nestjs/common';
import { CreateFolderPostDto } from '../dto/create-folder-post.dto';
import { UpdateFolderPostDto } from '../dto/update-folder-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FolderPost } from '../entities/folder-post.entity';
import { Repository } from 'typeorm';
import { PostsService } from 'src/modules/post-modules/posts/services/posts.service';
import { UserFoldersService } from '../../user-folders/services/user-folders.service';
import { FolderPostsValidator } from './folder-posts.validator';

@Injectable()
export class FolderPostsService {
	constructor(
		@InjectRepository(FolderPost)
		private readonly folderPostRepository: Repository<FolderPost>,
		private readonly folderPostsValidator: FolderPostsValidator,
		private readonly postsService: PostsService,
		private readonly userFoldersService: UserFoldersService,
	){}

	async create(data: CreateFolderPostDto) {
		const folder = await this.userFoldersService.findOne(data.idFolder);
		const post = await this.postsService.findOne(data.idPost);
		const folderExist = await this.folderPostRepository.findOne({
			where: {
				folder: {
					id: folder!.id
				},
				post: {
					id: post!.id
				}
			}
		})
		if (folderExist) {
			throw new HttpException('El testimonio ya se encuentra en esta coleccion',400);
		}
		const folderPost = new FolderPost();
		folderPost.folder = folder!;
		folderPost.post = post!;
		return await this.folderPostRepository.save(folderPost);
	}

	async findOne(idFolder: number,idPost: number) {
		this.folderPostsValidator.validateIdFolder(idFolder);
		this.folderPostsValidator.validateIdPost(idPost);
		const folder = await this.folderPostRepository.findOne({
			where: {
				folder: {
					id: idFolder
				},
				post: {
					id: idPost
				}
			}
		})
		this.folderPostsValidator.validateFolderPost(folder);
		return folder;
	}

	async remove(idFolder: number,idPost: number) {
		const folderPost = await this.findOne(idFolder,idPost);
		return await this.folderPostRepository.delete(folderPost!.id);
	}
}
