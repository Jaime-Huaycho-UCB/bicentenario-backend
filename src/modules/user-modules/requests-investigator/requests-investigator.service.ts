import { Injectable } from '@nestjs/common';
import { CreateRequestsInvestigatorDto } from './dto/create-requests-investigator.dto';
import { UpdateRequestsInvestigatorDto } from './dto/update-requests-investigator.dto';

@Injectable()
export class RequestsInvestigatorService {
  create(createRequestsInvestigatorDto: CreateRequestsInvestigatorDto) {
    return 'This action adds a new requestsInvestigator';
  }

  findAll() {
    return `This action returns all requestsInvestigator`;
  }

  findOne(id: number) {
    return `This action returns a #${id} requestsInvestigator`;
  }

  update(id: number, updateRequestsInvestigatorDto: UpdateRequestsInvestigatorDto) {
    return `This action updates a #${id} requestsInvestigator`;
  }

  remove(id: number) {
    return `This action removes a #${id} requestsInvestigator`;
  }
}
