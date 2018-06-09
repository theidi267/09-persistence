![cf](https://i.imgur.com/7v5ASc8.png) Lab 09: Vanilla REST API w/ Persistence

### Author

Timea Heidenreich

[![Build Status](https://travis-ci.com/theidi267/09-persistence.svg?branch=master)](https://travis-ci.com/theidi267/09-persistence)


- Github Repo: [https://github.com/theidi267/09-persistence](https://github.com/theidi267/09-persistence)
- Herouku app: [https://persistence-09.herokuapp.com/](https://persistence-09.herokuapp.com/)
- Travis Built: [https://travis-ci.com/theidi267/09-persistence](https://travis-ci.com/theidi267/09-persistence)



### Project

Build a RESTful HTTP server that handles GRT, POST and DELETE requests. The  API uses fs to write data to a .jason file for persistance.



### Language, Tech/Framework used

* Written in JavaScript with ES6

* Node.js
* Jest
* Eslint
* dotenv
* uuid

### How to use

- Fork and Clone Repository,
- ```npm install```
- Create a ```.env``` file and add ```PORT=3000``` in it
- Start the server with ```npm run start```
- For testing run ```npm run test```

### POST request

- Start the server
- Type the follwing command: ```echo '{"title":"_something_", "content":"_something_"}' | http post http://localhost:3000/api/v1/notes```
- You should receive a status code 200 and an object with a unique ID, timestamp, title and content you wrote

### Testing

#### parser.test.js 
- containes four tests of the parser module testing that it in deed requres and returns request objects

#### router.test.js
- contains three tests on it's functionality of registering and creating different routes


### Credits

* Code Fellows / John Cokos for providing the starter code.
