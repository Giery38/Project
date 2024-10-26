import { Injectable } from '@nestjs/common';
import { IFileService } from '../core/file-service.interface'
import * as fs from 'fs';
import * as yaml from 'js-yaml';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class YamlServiceService implements IFileService {
    public async Read<T>(path: string, type: new (...args: any[]) => T): Promise<T> {
        try {            
            const fileContents = await fs.promises.readFile(path, 'utf8')
            let res: T = await this.Load<T>(fileContents, type)
            return res
        } 
        catch {
            throw new Error("Read error")
        }                     
    }

    public async Write<T>(path: string, obj: T) {
        try {
            const yamlString = yaml.dump(obj)
            await fs.promises.writeFile(path, yamlString, 'utf-8')
        }
        catch {
            throw new Error("Write error")
        }
    }
    public async Load<T>(str: string, type: new (...args: any[]) => T): Promise<T> {        
        const resYaml = yaml.load(str)  
        let res: T = plainToInstance(type, resYaml)        
        return res
    }
}
