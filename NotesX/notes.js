const fs = require("fs");
const chalk = require("chalk");
const { title } = require("process");

const getNotes = () => {
  //   return "Dean";
  return "Dean";
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.greenBright.bold.inverse("Your Notes"));
  notes.forEach((note) => {
    console.log(chalk.green.bold.inverse(note.title));
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (!note) {
    console.log(chalk.red.inverse("No Note Found"));
  } else {
    console.log(chalk.bgMagentaBright.green.bold("NOTE:"));
    console.log(chalk.green.bold("Title: ") + chalk.green.inverse(note.title));
    console.log(note.body);
  }
};
const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New Note Added!"));
  } else {
    console.log(chalk.red("Note title Taken"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const removeNote = (title) => {
  const notes = loadNotes();
  const keptNotes = notes.filter((note) => note.title !== title);
  if (notes.length > keptNotes.length) {
    console.log(chalk.red.bold.inverse("Notes Removed!"));
    saveNotes(keptNotes);
  } else {
    console.log(chalk.red.bold.inverse("No Note Found!"));
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
