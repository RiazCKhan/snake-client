const { connect } = require("./client");

let connection;

// Setup User Interface
// Specifically, so that we can handle user input via stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // Added Handling CTRL + C User Input to exit game.
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === '\u0077') {
    connection.write("Move: up");
  }
  if (key === '\u0061') {
    connection.write("Move: left");
  }
  if (key === '\u0073') {
    connection.write("Move: down");
  }
  if (key === '\u0064') {
    connection.write("Move: right");
  }
  if (key === '\u007A') { // z
    connection.write("Say: GLHF");
  }
  if (key === '\u0078') { // x
    connection.write("Say: GG");
  }
  if (key === '\u0063') { // c
    connection.write("Say: EZ");
  }
};

module.exports = {
  setupInput,
};