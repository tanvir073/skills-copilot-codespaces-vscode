// create web server
const http = require('http');

const hostname = '127.0.0.1'; // This represents the local IP address (localhost)
const port = 3000; // You can choose any available port number

// Create the server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with the appropriate content type
  res.setHeader('Content-Type', 'text/plain');
  
  // Send a response to the client
  res.end('Hello, this is a simple web server!');
});

// Start listening on the specified port and IP address
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});