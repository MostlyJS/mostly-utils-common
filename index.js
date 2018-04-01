require = require("esm")(module/*, options*/);
console.time('mostly-utils-common import');
module.exports = require('./src/index');
console.timeEnd('mostly-utils-common import');
