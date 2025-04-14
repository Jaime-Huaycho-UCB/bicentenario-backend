import { Injectable } from '@nestjs/common';
import { CreatePostComplaintDto } from './dto/create-post_complaint.dto';
import { UpdatePostComplaintDto } from './dto/update-post_complaint.dto';

@Injectable()
export class PostComplaintsService {
  create(createPostComplaintDto: CreatePostComplaintDto) {
    return 'This action adds a new postComplaint';
  }

  findAll() {
    return `This action returns all postComplaints`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postComplaint`;
  }

  update(id: number, updatePostComplaintDto: UpdatePostComplaintDto) {
    return `This action updates a #${id} postComplaint`;
  }

  remove(id: number) {
    return `This action removes a #${id} postComplaint`;
  }
}
