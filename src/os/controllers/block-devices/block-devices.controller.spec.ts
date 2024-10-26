import { Test, TestingModule } from '@nestjs/testing';
import { BlockDevicesController } from './block-devices.controller';

describe('BlockDevicesController', () => {
  let controller: BlockDevicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlockDevicesController],
    }).compile();

    controller = module.get<BlockDevicesController>(BlockDevicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
