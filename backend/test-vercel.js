const handler = require('./dist/api/index.js').default;
const req = { url: '/', method: 'GET', headers: {} };
const res = {
  statusCode: 200,
  setHeader: () => {},
  end: (data) => console.log('Response:', data),
  send: (data) => console.log('Response:', data),
  json: (data) => console.log('Response:', data)
};
console.log('Testing handler...');
handler(req, res).then(() => console.log('Handler finished.')).catch(e => console.error('Handler crashed:', e));
