import { Test, TestingModule } from '@nestjs/testing';
import { ObjectsComplaintsController } from './objects-complaints.controller';
import { ObjectsComplaintsService } from './objects-complaints.service';

describe('ObjectsComplaintsController', () => {
  let controller: ObjectsComplaintsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObjectsComplaintsController],
      providers: [ObjectsComplaintsService],
    }).compile();

    controller = module.get<ObjectsComplaintsController>(ObjectsComplaintsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
