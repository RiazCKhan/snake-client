const net = require('net');

// Establishes connection with the game server
const connect = function() {
  // Connection print
  console.log("Successfully Connected to Game Server")

  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541,    
  });

  // Event Handler to handle incoming data from server
  conn.on('data',(data) => {
    console.log(data)
  })

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

module.exports = {
  connect
}