const IP = "localhost";
const PORT = 50541;

const movement = {
  '\u0077': "Move: up", // w
  '\u0061': "Move: left", // a
  '\u0073': "Move: down", // s
  '\u0064': "Move: right" // d
};

const messages = {
  '\u007A': "Say: GLHF", // z
  '\u0078': "Say: GG", // x
  '\u0063': "Say: EZ" // c
};

module.exports = {
  IP,
  PORT,
  movement,
  messages
};