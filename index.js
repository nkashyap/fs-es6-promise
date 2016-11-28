"use strict";
const zip = (keys, values) => {
  return keys
    .map((key, i) => ({
      key: key,
      value: values[i],
    }))
    .reduce((acc, item) => {
      acc[item.key] = item.value;
      return acc;
    }, {})
};

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

  execute(method, params, signature) {
    const args = Array.from(params);
    return (new Promise((resolve, reject) => {
      args.push((error, ...cbArgs) => {
        if (error) return reject(error);
        if (signature) {
          resolve(zip(signature, cbArgs));
        } else {
          resolve(cbArgs[0]);
        }
      });

      this.fs[method].apply(this.fs, args);
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
    return this.execute('access', arguments);
  }

  appendFile(file, data, options) {
    return this.execute('appendFile', arguments);
  }

  chmod(path, mode) {
    return this.execute('chmod', arguments);
  }

  chown(path, uid, gid) {
    return this.execute('chown', arguments);
  }

  close(fd) {
    return this.execute('close', arguments);
  }

  fchmod(fd, mode) {
    return this.execute('fchmod', arguments);
  }

  fchown(fd, uid, gid) {
    return this.execute('fchown', arguments);
  }

  fstat(fd) {
    return this.execute('fstat', arguments);
  }

  fsync(fd) {
    return this.execute('fsync', arguments);
  }

  ftruncate(fd, len) {
    return this.execute('ftruncate', arguments);
  }

  futimes(fd, atime, mtime) {
    return this.execute('futimes', arguments);
  }

  lchmod(path, mode) {
    return this.execute('lchmod', arguments);
  }

  lchown(path, uid, gid) {
    return this.execute('lchown', arguments);
  }

  link(src, dst) {
    return this.execute('link', arguments);
  }

  lstat(path) {
    return this.execute('lstat', arguments);
  }

  mkdir(path, mode) {
    return this.execute('mkdir', arguments);
  }

  open(path, flags, mode) {
    return this.execute('open', arguments);
  }

  read(fd, buffer, offset, length, position) {
    return this.execute('read', arguments, ['bytesRead', 'buffer']);
  }

  readdir(path) {
    return this.execute('readdir', arguments);
  }

  readFile(file, options) {
    return this.execute('readFile', arguments);
  }

  readlink(path) {
    return this.execute('readlink', arguments);
  }

  realpath(path, cache) {
    return this.execute('realpath', arguments);
  }

  rename(oldPath, newPath) {
    return this.execute('rename', arguments);
  }

  rmdir(path) {
    return this.execute('rmdir', arguments);
  }

  stat(path) {
    return this.execute('stat', arguments);
  }

  symlink(target, path, type) {
    return this.execute('symlink', arguments);
  }

  truncate(path, len) {
    return this.execute('truncate', arguments);
  }

  unlink(path) {
    return this.execute('unlink', arguments);
  }

  utimes(path, atime, mtime) {
    return this.execute('utimes', arguments);
  }

  write(fd, buffer, offset, length, position) {
    return this.execute('write', arguments, ['written', 'buffer']);
  }

  writeFile(file, data, options) {
    return this.execute('writeFile', arguments);
  }
}

module.exports = new FileSystem();
