module.exports = ast => {
  let context = {};
  ast.forEach(
    subAst => 
      require("../statements/" + subAst + ".js")
        .execute(subAst, context)
  );
};