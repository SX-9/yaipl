function compile(args) {
  const ast = {
    action: args[0],
    name: args[1].replace("!", ""),
    constant: args[1].startsWith("!"),
    type: args[2].replace("*", ""),
    array: args[2].startsWith("*"),
    value: args[3],
  }
  const validPrimitiveTypes = {
    "int": "number",
    "str": "string",
    "bool": "boolean",
  };
  const validNameChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  const ErrorConstructor = Error;
  Error = function(message) {
    ErrorConstructor.call(this, message);
    this.ast = ast;
    this.message = message;
  }

  if (!ast.name.length) {
    throw new Error("Empty name");
  }

  for (let i = 0; i < ast.name.length; i++) {
    if (!validNameChars.includes(ast.name[i])) {
      throw new Error("Invalid character in name");
    }
  }

  if (!Object.keys(validPrimitiveTypes).includes(ast.type)) {
    throw new Error("Invalid type");
  }

  if (ast.array && ast.constant) {
    throw new Error("Constant arrays are not supported");
  }
  
  if (ast.value === "bool" && ast.constant) {
    throw new Error("Booleans cannot be constants");
  }
  
  if (ast.constant && !ast.value) {
    throw new Error("Constants must have an immediate value");
  }

  if (ast.array && ast.value?.length) {
    throw new Error("Arrays cannot have an immediate value");
  }

  if (ast.type === "bool" && ast.value) {
    throw new Error("Booleans cannot have an immediate value");
  }

  if (typeof ast.value !== validPrimitiveTypes[ast.type] && !ast.array && ast.value) {
    throw new Error("Value does not match type");
  }
  
  return ast;
}

function execute(ast, context) {
  
}

module.exports = {compile, execute};