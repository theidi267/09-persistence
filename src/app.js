'use strict';

const http = require('http');

const router = require('./lib/router.js');
require('./api/api.js');

let isRunning = false;

const app = http.createServer( router.route );

module.exports = {
  start: (port) => {
    if (!isRunning) {
      app.listen(port, err => {
        if (err) { throw err; }
        isRunning = true;
        console.log(`Server is up and running on ${port}!`);
      });
    }     else {
      console.log('Server is already running');
    }
  },
  stop: () => {
    isRunning = false;
    console.log('Server has been stopped');
  },
};