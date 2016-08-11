//dependencies
const http = require('http'); //from node
const path = require('path');
const express = require('express'); //from npm (package.json)
const ejs = require('ejs');


//initialize
const app = express();
//set views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//add route that renders index view
//.get takes route (in this case == root path) and function
app.get('/', function(req, res, next) {
  //send file using full path name - app's directory + /views/index.html
  res.render('index.ejs', {names: ['Taylor', 'Lindsey', 'Canaan', 'Lynn']});
});

//set up server
const port = 3000;
const server = http.createServer(app);

server.listen(port);
console.log(`Listening on port ${port}`);
