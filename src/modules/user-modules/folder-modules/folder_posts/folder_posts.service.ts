import { Injectable } from '@nestjs/common';
import { CreateFolderPostDto } from './dto/create-folder_post.dto';
import { UpdateFolderPostDto } from './dto/update-folder_post.dto';

@Injectable()
export class FolderPostsService {
  create(createFolderPostDto: CreateFolderPostDto) {
    return 'This action adds a new folderPost';
  }

  findAll() {
    return `This action returns all folderPosts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} folderPost`;
  }

  update(id: number, updateFolderPostDto: UpdateFolderPostDto) {
    return `This action updates a #${id} folderPost`;
  }

  remove(id: number) {
    return `This action removes a #${id} folderPost`;
  }
}
