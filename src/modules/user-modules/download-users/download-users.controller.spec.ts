import { Test, TestingModule } from '@nestjs/testing';
import { DownloadUsersController } from './download-users.controller';
import { DownloadUsersService } from './download-users.service';

describe('DownloadUsersController', () => {
  let controller: DownloadUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DownloadUsersController],
      providers: [DownloadUsersService],
    }).compile();

    controller = module.get<DownloadUsersController>(DownloadUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
