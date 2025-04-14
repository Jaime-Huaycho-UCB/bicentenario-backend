import { Test, TestingModule } from '@nestjs/testing';
import { UserForldersController } from './user_forlders.controller';
import { UserForldersService } from './user_forlders.service';

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
