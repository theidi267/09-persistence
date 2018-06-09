'use strict';

const memoryStorage = require('./storage-in-memory.js'); //eslint-disable-line
const fileStorage = require('./storage-in-files.js');

module.exports = fileStorage;