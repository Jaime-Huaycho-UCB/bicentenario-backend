import { Injectable } from '@nestjs/common';
import { CreateObjectsComplaintDto } from './dto/create-objects-complaint.dto';
import { UpdateObjectsComplaintDto } from './dto/update-objects-complaint.dto';

@Injectable()
export class ObjectsComplaintsService {
  create(createObjectsComplaintDto: CreateObjectsComplaintDto) {
    return 'This action adds a new objectsComplaint';
  }

  findAll() {
    return `This action returns all objectsComplaints`;
  }

  findOne(id: number) {
    return `This action returns a #${id} objectsComplaint`;
  }

  update(id: number, updateObjectsComplaintDto: UpdateObjectsComplaintDto) {
    return `This action updates a #${id} objectsComplaint`;
  }

  remove(id: number) {
    return `This action removes a #${id} objectsComplaint`;
  }
}
