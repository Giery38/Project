import { Injectable } from '@nestjs/common';
const { promisify } = require('util');
const exec = promisify(require('child_process').exec)

@Injectable()
export class CommandExecutor {

    public async execute(command: string): Promise<CommandResult>{
        const result: CommandResult  = await exec(command) as CommandResult;
        return result
    }
}

export class CommandResult {
    public readonly stdout: string
    public readonly stderr: string

    constructor(stdout: string = '', stderr: string = '') {
        this.stdout = stdout;
        this.stderr = stderr;
    }
}