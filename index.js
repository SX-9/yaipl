const fs = require('fs');
const tools = require('./scripts/tools.js');
const file = fs.readFileSync(process.argv[2], 'utf8');

const instructions = tools.lexer(file);
console.table(instructions);
const ast = tools.ast(instructions);
console.table(ast);
// tools.execute(ast);