'use strict';

const storage = module.exports = {};
const database = {};

storage.fetchAll = () => {
  return Promise.resolve(database);
};

storage.fetchOne = (id) => {
  return new Promise((resolve, reject) => {
    if (database[id]) { resolve(database[id]); }
    else { reject(`${id} not found`); }
  });
};

storage.save = (record) => {
  return new Promise((resolve, reject) => { //eslint-disable-line
    database[record.id] = record;
    resolve(database[record.id]);
  });
};

storage.delete = (id) => {
  return new Promise((resolve, reject) => {
    if (database[id]) {
      delete database[id];
      resolve('Entry Deleted!');
    } else {
      reject('Entry was not found');
    }
  });
};