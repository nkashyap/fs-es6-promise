"use strict";
/**
 * Created by Nisheeth on 06/02/2016.
 */

const fs = require('./');
const assert = require('assert');
require('mocha');

describe('file-system-es6-promise', () => {

    describe('access()', () => {
        it('should execute command with correct arguments', (done) => {
            fs.access('/etc/passwd', fs.F_OK)
                .then(()=> {
                    done();
                });
        });
        it('should fail to execute command ', (done) => {
            fs.access('/etc/test', fs.X_OK)
                .catch((error) => {
                    assert.equal(error.code, 'ENOENT');
                    assert.equal(error.syscall, 'access');
                    assert.equal(error.path, '/etc/test');
                    done();
                });
        });
    });
});