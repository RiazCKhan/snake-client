const { connect } = require("./client");
const { movement, messages } = require('./constants');

let connection;

// Setup User Interface
// Specifically, so that we can handle user input via stdin
const setupInput = function(conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // Added Handling CTRL + C User Input to exit game.
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  console.log('handleUserInput called')
  if (key === '\u0003') {
    process.exit();
  }
  if (movement[key] !== undefined) {
    connection.write(movement[key])
  }
  if (messages[key] !== undefined) {
    connection.write(messages[key])
  }
};

module.exports = {
  setupInput
};