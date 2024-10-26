import { Test, TestingModule } from '@nestjs/testing';
import { BlockDevicesService } from './block-devices.service';

describe('BlockDevicesService', () => {
  let service: BlockDevicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlockDevicesService],
    }).compile();

    service = module.get<BlockDevicesService>(BlockDevicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
