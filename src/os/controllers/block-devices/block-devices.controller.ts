import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { BlockDevicesService } from  '../../services/block-devices/block-devices.service'
import { BlockDevice } from '../../services/core/block-device'

@Controller('api/disks')
export class BlockDevicesController {
    constructor(private readonly blockDevicesService: BlockDevicesService){}

    @Get()
    getAllDisks(): BlockDevice[] {
        return this.blockDevicesService.getBlockDevices();
   }
  @Get(':path')
  getDiskByPath(@Param('path') path: string): BlockDevice {
    const device: BlockDevice = this.blockDevicesService.getBlockDevice(path);
    if (device == null) {
      throw new NotFoundException(`Block device with path "${path}" not found`);
    }
    return device;
  }
}
