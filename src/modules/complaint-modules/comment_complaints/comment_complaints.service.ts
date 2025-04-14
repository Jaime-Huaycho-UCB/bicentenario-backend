import { Injectable } from '@nestjs/common';
import { CreateCommentComplaintDto } from './dto/create-comment_complaint.dto';
import { UpdateCommentComplaintDto } from './dto/update-comment_complaint.dto';

@Injectable()
export class CommentComplaintsService {
  create(createCommentComplaintDto: CreateCommentComplaintDto) {
    return 'This action adds a new commentComplaint';
  }

  findAll() {
    return `This action returns all commentComplaints`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commentComplaint`;
  }

  update(id: number, updateCommentComplaintDto: UpdateCommentComplaintDto) {
    return `This action updates a #${id} commentComplaint`;
  }

  remove(id: number) {
    return `This action removes a #${id} commentComplaint`;
  }
}
