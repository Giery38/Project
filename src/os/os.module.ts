import { Module } from '@nestjs/common';
import { BlockDevicesService } from './services/block-devices/block-devices.service'
import { CommandExecutor } from './services/core/command-executor/command-executor'
import { FilesModule } from '../files/files.module'
import { BlockDevicesController } from '../os/controllers/block-devices/block-devices.controller'

@Module({
    controllers: [BlockDevicesController],
    providers: [BlockDevicesService, CommandExecutor],
    imports: [FilesModule]
    
})
export class OsModule {
    
}
