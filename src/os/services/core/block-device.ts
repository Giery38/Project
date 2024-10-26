
export class BlockDevice {
    public path: string
    public size: string
    constructor(path: string, size: string) {
        this.path = path
        this.size = size
    }
}
export class BlockDevices {
    public blockdevices: BlockDevice[]
    constructor(blockDevices: BlockDevice[]) {
        this.blockdevices = blockDevices
    }
}