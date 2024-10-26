import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { CommandExecutor, CommandResult } from '../core/command-executor/command-executor'
import { YamlServiceService } from '../../../files/services/yaml-service/yaml.service'
import { BlockDevice, BlockDevices } from '../core/block-device'

@Injectable()
export class BlockDevicesService implements OnModuleInit, OnModuleDestroy {

    private currentInterval: NodeJS.Timeout
    private devices: Map<string, BlockDevice>
    constructor(
        private readonly commandExecutor: CommandExecutor,
        private readonly yamlServiceService: YamlServiceService
    ){}
    onModuleInit() {   
        this.registerBlockDevices();                                 
        this.startMonitiring();
    }
    onModuleDestroy() {
        this.stopMonitiring
    }
    private startMonitiring() {
        this.currentInterval = setInterval(() =>  this.registerBlockDevices(), 10000)
    }
    private stopMonitiring() {
        if(this.currentInterval != null) {
            clearInterval(this.currentInterval)
        }        
    }
    private async registerBlockDevices() {
       const commandResult: CommandResult = await this.commandExecutor.execute(`lsblk -J -o PATH,SIZE`) as CommandResult
       if(commandResult.stderr) {
         throw new Error("Command lsblk error")
       }
       const blockDevices: BlockDevices = await this.yamlServiceService.Load<BlockDevices>(commandResult.stdout, BlockDevices)
       await this.yamlServiceService.Write('blockDevices.yaml', blockDevices) 
       let result: Map<string, BlockDevice> = new Map<string, BlockDevice>()
       for (let device of blockDevices.blockdevices) {
        result.set(device.path, new BlockDevice(device.path, device.size)); 
      }  
       this.devices = result
    }
    public async getBlockDevicesFromFile(): Promise<BlockDevices> {
        const blockDevices: BlockDevices = await this.yamlServiceService.Read<BlockDevices>('blockDevices.yaml', BlockDevices)  
        return blockDevices   
    }
    public getBlockDevice(path: string): BlockDevice {
        if(this.devices.has(path)) {
            return this.devices.get(path)
        }
        return null
    }
    public getBlockDevices(): BlockDevice[] {
        return Array.from(this.devices.values());
    }
}
