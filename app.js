// CommonJs, every file is module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require('./modules/names')
const sayHi = require('./modules/utils')

console.log(names)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
