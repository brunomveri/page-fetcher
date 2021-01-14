const request = require('request');
const fs = require('fs');
const writeFile = fs.writeFile;

const arg = process.argv.slice(2);
const url = arg[0];
const path = arg[1];

request(url, (error, response, body) => {
  // console.log('error', error);
  // console.log('statusCode', response && response.statusCode);
  // console.log('body', body);
  writeFile(url, `GET / HTTP/1.1\r\n`, 'utf8', () => {
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  });
});



