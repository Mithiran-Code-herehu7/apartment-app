const http = require('http');
const handler = require('./dist/api/index.js').default;

const server = http.createServer((req, res) => {
  handler(req, res).catch(console.error);
});

server.listen(3002, () => {
  console.log('Test server running on 3002');
  http.get('http://localhost:3002/api/v1/apartments', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log('Response:', res.statusCode, data);
      server.close();
      process.exit(0);
    });
  }).on('error', (err) => {
    console.error('Request error:', err);
    server.close();
    process.exit(1);
  });
});
