const net = require('net');

// Establishes connection with the game server
const connect = function() {
  
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541,    
  });
  
  // Event Handler to handle incoming data from server
  conn.on('data',(data) => {
    console.log('Almighty Server: ', data)
  })
  
  // Connection Print + Sending a Name + Name Command
  conn.on('connect', () => {
    console.log("Successfully Connected to The Almighty Server")
    conn.write('Name: RCK');
  });

  // HARD CODE MOVEMENT EXPIREMENTS
/*   conn.on('connect', () => {
    conn.write("Move: up")

      setInterval(() => {
        conn.write("Move: left");
      }, 100);
  }) */

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

module.exports = {
  connect
}


/*
 server.on('connection', (client) => {
  console.log('New client connected!');
  client.write('Hello there!');
});
 */