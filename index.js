"use strict";
/**
 * Created by Nisheeth on 06/02/2016.
 */

/**
 * Create a new FileSystem
 * @class
 * @name FileSystem
 * @see {@link https://nodejs.org/api/fs.html}
 */
class FileSystem {

    constructor() {
        this.fs = require('fs');
    }

    execute() {
        var args = Array.from(arguments);
        return (new Promise((resolve, reject) => {
            args.push((error, arg1, arg2) => {
                if (error) return reject(error);
                resolve({args: [arg1, arg2]});
            });

            this.fs[args.shift()].apply(this.fs, args);
        }));
    }

    get F_OK() {
        return this.fs.F_OK;
    }

    get R_OK() {
        return this.fs.R_OK;
    }

    get W_OK() {
        return this.fs.W_OK;
    }

    get X_OK() {
        return this.fs.X_OK;
    }

    access(path, mode) {
        return this.execute('access', path, mode);
    }

    appendFile(file, data, options) {
        return this.execute('appendFile', file, data, options);
    }

    chmod(path, mode) {
        return this.execute('chmod', path, mode);
    }

    chown(path, uid, gid) {
        return this.execute('chown', path, uid, gid);
    }

    close(fd) {
        return this.execute('close', fd);
    }

    fchmod(fd, mode) {
        return this.execute('fchmod', fd, mode);
    }

    fchown(fd, uid, gid) {
        return this.execute('fchown', fd, uid, gid);
    }

    fstat(fd) {
        return this.execute('fstat', fd);
    }

    fsync(fd) {
        return this.execute('fsync', fd);
    }

    ftruncate(fd, len) {
        return this.execute('ftruncate', fd, len);
    }

    futimes(fd, atime, mtime) {
        return this.execute('futimes', fd, atime, mtime);
    }

    lchmod(path, mode) {
        return this.execute('lchmod', path, mode);
    }

    lchown(path, uid, gid) {
        return this.execute('lchown', path, uid, gid);
    }

    link(src, dst) {
        return this.execute('link', src, dst);
    }

    lstat(path) {
        return this.execute('lstat', path);
    }

    mkdir(path, mode) {
        return this.execute('mkdir', path, mode);
    }

    open(path, flags, mode) {
        return this.execute('open', path, flags, mode);
    }

    read(fd, buffer, offset, length, position) {
        return this.execute('read', fd, buffer, offset, length, position);
    }

    readdir(path) {
        return this.execute('readdir', path);
    }

    readFile(file, options) {
        return this.execute('readFile', file, options);
    }

    readlink(path) {
        return this.execute('readlink', path);
    }

    realpath(path, cache) {
        return this.execute('realpath', path, cache);
    }

    rename(oldPath, newPath) {
        return this.execute('rename', oldPath, newPath);
    }

    rmdir(path) {
        return this.execute('rmdir', path);
    }

    stat(path) {
        return this.execute('stat', path);
    }

    symlink(target, path, type) {
        return this.execute('symlink', target, path, type);
    }

    truncate(path, len) {
        return this.execute('truncate', path, len);
    }

    unlink(path) {
        return this.execute('unlink', path);
    }

    utimes(path, atime, mtime) {
        return this.execute('utimes', path, atime, mtime);
    }

    write(fd, buffer, offset, length, position) {
        //fs.write(fd, buffer, offset, length[, position], callback)
        //fs.write(fd, data[, position[, encoding]], callback)
        return this.execute('write', fd, buffer, offset, length, position);
    }

    writeFile(file, data, options) {
        return this.execute('writeFile', file, data, options);
    }
}

module.exports = new FileSystem();
