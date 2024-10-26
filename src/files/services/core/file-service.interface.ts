
export interface IFileService {
    Read<T>(path: string,  type: new (...args: any[]) => T): Promise<T>;
    Write<T>(path: string, obj: T): Promise<void>;
}