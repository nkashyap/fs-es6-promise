import * as fs from 'fs';

import { execute0, execute1, execute2 } from './execute';

export const { F_OK, R_OK, W_OK, X_OK } = fs.constants;

export function chmod(path: string | Buffer, mode: number | string): Promise<undefined> {
    return execute0(fs.chmod, path, mode);
}
export function fchmod(fd: number, mode: number | string): Promise<undefined> {
    return execute0(fs.fchmod, fd, mode);
}

export function chown(path: string | Buffer, uid: number, gid: number): Promise<undefined> {
    return execute0(fs.chown, path, uid, gid);
}
export function fchown(fd: number, uid: number, gid: number): Promise<undefined> {
    return execute0(fs.fchown, fd, uid, gid);
}

export function stat(path: string | Buffer): Promise<fs.Stats> {
    return execute1(fs.stat, path);
}
export function fstat(fd: number): Promise<fs.Stats> {
    return execute1(fs.fstat, fd);
}
export function lstat(path: string | Buffer): Promise<fs.Stats> {
    return execute1(fs.lstat, path);
}

export function truncate(path: string, len: number): Promise<undefined> {
    return execute0(fs.truncate, path, len);
}
export function ftruncate(fd: number, len?: number): Promise<undefined> {
    return execute0(fs.ftruncate, fd, len);
}

export function utimes(path: string | Buffer, atime: number | Date, mtime: number | Date): Promise<undefined> {
    return execute0(fs.utimes, path, atime, mtime);
}
export function futimes(fd: number, atime: number | Date, mtime: number | Date): Promise<undefined> {
    return execute0(fs.futimes, fd, atime, mtime);
}

export function open(path: string | Buffer, flags: string | number, mode?: number): Promise<number> {
    return execute1(fs.open, path, flags, mode);
}
export function close(fd: number): Promise<undefined> {
    return execute0(fs.close, fd);
}
export function read(fd: number, buffer: Buffer, offset: number, length: number, position: number): Promise<{ bytesRead: number, buffer: Buffer }> {
    return execute2('bytesRead', 'buffer', fs.read, fd, buffer, offset, length, position);
}
export function write(fd: number, buffer: Buffer, offset: number, length: number, position?: number): Promise<{ written: number, buffer: Buffer }>;
export function write(fd: number, data: any, offset?: number, encoding?: string): Promise<{ written: number, str: string }>;
export function write(fd: number, data: any | Buffer, offset?: number, encodingOrLength?: string | number, position?: number): Promise<{ written: number, str: string } | { written: number, buffer: Buffer }> {
    // TODO: why can’t it infer this?
    if (data instanceof Buffer) {
        const length = encodingOrLength as number;
        return execute2<number, Buffer, number, number, number, number, Buffer, { written: number, buffer: Buffer }>('written', 'buffer', fs.write, fd, data, offset as number, length, position as number);
    } else {
        const encoding = encodingOrLength as string;
        return execute2<number, any, number | undefined, string | undefined, number, string, { written: number, str: string }>('written', 'str', fs.write, fd, data, offset, encoding);
    }
}
export function fsync(fd: number): Promise<undefined> {
    return execute0(fs.fsync, fd);
}
export function fdatasync(fd: number): Promise<undefined> {
    return execute0(fs.fdatasync, fd);
}

export function readFile(filename: string, encoding: string): Promise<string>;
export function readFile(filename: string, options: { encoding: string, flag?: string }): Promise<string>;
export function readFile(filename: string, options?: { flag?: string }): Promise<Buffer>;
export function readFile(filename: string, optionsOrEncoding?: string | { encoding?: string, flag?: string }): Promise<string | Buffer> {
    return execute1(fs.readFile, filename, optionsOrEncoding as any);
}
export interface IWriteOptions {
    encoding?: string;
    mode?: number | string;
    flag?: string;
}
export function appendFile(filename: string, data: any, options?: IWriteOptions): Promise<undefined> {
    return execute0<string, any, IWriteOptions | undefined>(fs.appendFile, filename, data, options);
}
export function writeFile(filename: string, data: any, options?: IWriteOptions): Promise<undefined> {
    return execute0(fs.writeFile, filename, data, options);
}

export function access(path: string | Buffer, mode: number): Promise<undefined> {
    return execute0(fs.access, path, mode);
}
export function mkdir(path: string | Buffer, mode?: number | string): Promise<undefined> {
    return execute0(fs.mkdir, path, mode);
}
export function mkdtemp(prefix: string): Promise<string> {
    return execute0(fs.mkdtemp, prefix);
}
export function readdir(path: string | Buffer): Promise<string[]> {
    return execute1(fs.readdir, path);
}
export function readlink(path: string | Buffer): Promise<string> {
    return execute1(fs.readlink, path);
}
export function realpath(path: string | Buffer, cache?: { [path: string]: string }): Promise<string> {
    return execute1(fs.realpath, path, cache);
}
export function rmdir(path: string | Buffer): Promise<undefined> {
    return execute0(fs.rmdir, path);
}
export function unlink(path: string | Buffer): Promise<undefined> {
    return execute0(fs.unlink, path);
}

export function rename(oldPath: string, newPath: string): Promise<undefined> {
    return execute0(fs.rename, oldPath, newPath);
}
export function link(srcpath: string | Buffer, dstpath: string | Buffer): Promise<undefined> {
    return execute0(fs.link, srcpath, dstpath);
}
export function symlink(srcpath: string | Buffer, dstpath: string | Buffer, type?: string): Promise<undefined> {
    return execute0(fs.symlink, srcpath, dstpath, type);
}
