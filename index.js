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
        return (new Promise((resolve, reject) => {
            this.fs
                .access(path, mode, (error) => {
                    if (error) return reject(error);
                    resolve();
                });
        }));
    }
}

module.exports = new FileSystem();
