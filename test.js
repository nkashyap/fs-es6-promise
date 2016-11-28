"use strict";
/**
 * Created by Nisheeth on 06/02/2016.
 */

const fs = require('./');
const assert = require('assert');
require('mocha');

describe('fs-es6-promise', () => {

  describe('access()', () => {
    it('should resolve promise', (done) => {
      fs.access('./index.js', fs.F_OK)
        .then(() => {
          done();
        });
    });
    it('should reject promise ', (done) => {
      fs.access('./index-missing.js', fs.X_OK)
        .catch((error) => {
          assert.equal(error.errno, -2);
          assert.equal(error.code, 'ENOENT');
          assert.equal(error.syscall, 'access');
          assert.equal(error.path, './index-missing.js');
          done();
        });
    });
  });

  describe('appendFile()', () => {
    it('should resolve promise', (done) => {
      fs.appendFile('./.test.txt', 'Hello World\n', { flag: 'a' })
        .then(() => {
          done();
        });
    });
    it('should reject promise ', (done) => {
      fs.appendFile('./.test.txt', 'Hello World\n', { flag: 'ax' })
        .catch((error) => {
          assert.equal(error.errno, -17);
          assert.equal(error.code, 'EEXIST');
          assert.equal(error.syscall, 'open');
          assert.equal(error.path, './.test.txt');
          done();
        });
    });
  });

  describe('chmod()', () => {
    it('should resolve promise', (done) => {
      fs.chmod('./LICENSE', fs.F_OK)
        .then(() => {
          done();
        });
    });
    it('should reject promise ', (done) => {
      fs.chmod('./index-missing.js', fs.F_OK)
        .catch((error) => {
          assert.equal(error.errno, -2);
          assert.equal(error.code, 'ENOENT');
          assert.equal(error.syscall, 'chmod');
          assert.equal(error.path, './index-missing.js');
          done();
        });
    });
  });

  describe('chown()', () => {
    it('should resolve promise', (done) => {
      fs.stat('./LICENSE')
        .then((result) => {
          fs.chown('./LICENSE', result.uid, result.gid)
            .then(() => {
              done();
            });
        });
    });
    it('should reject promise ', (done) => {
      fs.chown('./index-missing.js', 1, 1)
        .catch((error) => {
          assert.equal(error.errno, -2);
          assert.equal(error.code, 'ENOENT');
          assert.equal(error.syscall, 'chown');
          assert.equal(error.path, './index-missing.js');
          done();
        });
    });
  });

  //fs.close(fd, callback)
  //fs.fchmod(fd, mode, callback)
  //fs.fchown(fd, uid, gid, callback)
  //fs.fstat(fd, callback)
  //fs.fsync(fd, callback)
  //fs.ftruncate(fd, len, callback)
  //fs.futimes(fd, atime, mtime, callback)

  //fs.lchmod(path, mode, callback)
  //fs.lchown(path, uid, gid, callback)
  //fs.link(srcpath, dstpath, callback)
  //fs.lstat(path, callback)
  //fs.mkdir(path[, mode], callback)
  //fs.open(path, flags[, mode], callback)
  //fs.read(fd, buffer, offset, length, position, callback)
  //fs.readdir(path, callback)
  //fs.readFile(file[, options], callback)
  //fs.readlink(path, callback)
  //fs.realpath(path[, cache], callback)
  //fs.rename(oldPath, newPath, callback)
  //fs.rmdir(path, callback)
  //fs.stat(path, callback)
  //fs.symlink(target, path[, type], callback)
  //fs.truncate(path, len, callback)
  //fs.unlink(path, callback)
  //fs.utimes(path, atime, mtime, callback)
  //fs.write(fd, buffer, offset, length[, position], callback)
  //fs.write(fd, data[, position[, encoding]], callback)
  //fs.writeFile(file, data[, options], callback)
});