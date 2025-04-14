import { Injectable } from '@nestjs/common';
import { CreateComplaintStatusDto } from './dto/create-complaint_status.dto';
import { UpdateComplaintStatusDto } from './dto/update-complaint_status.dto';

@Injectable()
export class ComplaintStatusesService {
  create(createComplaintStatusDto: CreateComplaintStatusDto) {
    return 'This action adds a new complaintStatus';
  }

  findAll() {
    return `This action returns all complaintStatuses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} complaintStatus`;
  }

  update(id: number, updateComplaintStatusDto: UpdateComplaintStatusDto) {
    return `This action updates a #${id} complaintStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} complaintStatus`;
  }
}
