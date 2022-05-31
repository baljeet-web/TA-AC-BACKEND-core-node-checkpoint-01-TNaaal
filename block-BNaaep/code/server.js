const http = require(`http`);
const fs = require(`fs`);
const path = require(`path`);

http
  .createServer((request, response) => {
    store = ``;
    request.on(`data`, (chunk) => {
      store = store + chunk;
    });
    request.on(`end`, () => {
      if (request.url === `/` && request.method === `GET`) {
        response.setHeader(`content-type`, `text/html`);
        fs.createReadStream(`./index.html`).pipe(response);
      }
      if (request.method === `GET` && request.url === `/about`) {
        response.setHeader(`content-type`, `text/html`);
        fs.createReadStream(`./about.html`).pipe(response);
      }
      if (request.url === `/contact` && request.method === `GET`) {
        response.setHeader(`content-type`, `text/json`);
        fs.createReadStream(`../contacts/suraj.json`).pipe(response);
      }
    });
  })
  .listen(5000, () => {
    console.log(`At port 5000`);
  });
