const validator = require("validator");
const yargs = require("yargs");
const getNotes = require("./notes.js");
const chalk = require("chalk");

console.log(yargs.argv);

// ADD COMMAND
yargs.command({
  command: "add",
  describe: "Add a new Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    console.log("Adding new note");
  },
});

yargs.command({
  command: "remove",
  describe: "Removed a new Note",
  handler: (argv) => {
    console.log("Removing new note");
  },
});

yargs.command({
  command: "list",
  describe: "Listing out all Notes",
  handler: () => {
    console.log("Listing the Note");
  },
});

yargs.command({
  command: "read",
  describe: "Reading the Note",
  handler: (argv) => {
    console.log("Reading the Note");
  },
});
