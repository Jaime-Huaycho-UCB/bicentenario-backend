import { Test, TestingModule } from '@nestjs/testing';
import { UserForldersController } from './user-forlders.controller';
import { UserForldersService } from './user-forlders.service';

describe('UserForldersController', () => {
  let controller: UserForldersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserForldersController],
      providers: [UserForldersService],
    }).compile();

    controller = module.get<UserForldersController>(UserForldersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
