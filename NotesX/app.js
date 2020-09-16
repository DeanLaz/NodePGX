const validator = require("validator");
const getNotes = require("./notes.js");
const chalk = require("chalk");

console.log(chalk.bold.green("Chalk in Green"));
console.log(validator.isEmail("deanlazx@gmail.com"));
