import { Test, TestingModule } from '@nestjs/testing';
import { UserForldersService } from './user_forlders.service';

describe('UserForldersService', () => {
  let service: UserForldersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserForldersService],
    }).compile();

    service = module.get<UserForldersService>(UserForldersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
