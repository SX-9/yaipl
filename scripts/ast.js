module.exports = (code) => code
  .map(tokens => {
    try {
      return require("../statements/" + tokens[0] + ".js")
          .compile(tokens);
    } catch (e) {
      if (e.code === "MODULE_NOT_FOUND") {
        throw new Error("Unknown statement " + tokens[0]);
      } else {
        throw e;
      }
    }
  });