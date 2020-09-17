const validator = require("validator");
const yargs = require("yargs");
const notes = require("./notes.js");
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
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Removed a new Note",
  builder: {
    title: {
      describe: "Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "Listing out all Notes",
  handler(argv) {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "Reading the Note",
  builder: {
    title: {
      describe: "Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
    console.log(chalk.green.bold("Reading the Note"));
  },
});

yargs.parse();
