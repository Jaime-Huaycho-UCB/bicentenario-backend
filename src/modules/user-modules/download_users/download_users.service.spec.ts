import { Test, TestingModule } from '@nestjs/testing';
import { DownloadUsersService } from './download_users.service';

describe('DownloadUsersService', () => {
  let service: DownloadUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DownloadUsersService],
    }).compile();

    service = module.get<DownloadUsersService>(DownloadUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
