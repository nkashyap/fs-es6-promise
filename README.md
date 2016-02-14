# fs-es6-promise

ES6 promise wrapper around nodejs file system api

### Installation

```sh
$ npm install -g fs-es6-promise
```

### Usage

```javascript
const fs = require('fs-es6-promise');
fs.access('/etc/passwd', fs.F_OK)
    .then((result)=>{})
    .catch((error)=>{});
```

### References

* [fs-promise] fs promise support for older version of nodejs
* [File system] Nodejs file system api
* [promise] ES6 promise api

[fs-promise]: <https://www.npmjs.com/package/fs-promise>
[File system]: <https://nodejs.org/api/fs.html>
[promise]: <https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise>