import { Test, TestingModule } from '@nestjs/testing';
import { ObjectsComplaintsService } from './objects-complaints.service';

describe('ObjectsComplaintsService', () => {
  let service: ObjectsComplaintsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObjectsComplaintsService],
    }).compile();

    service = module.get<ObjectsComplaintsService>(ObjectsComplaintsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
