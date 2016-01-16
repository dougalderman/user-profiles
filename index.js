var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');

var config = require('./config.js');
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');

var app = express();

app.use(bodyParser.json());

var port = 6237;

var url = 'http://localhost:' + port.toString();
console.log('url', url);

var corsOptions = {
    origin: url
}; 

app.use(cors(corsOptions)); 


app.listen(port, function() {
    console.log('listening to port ', port);
});


app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: true,
    resave: true
}));

app.use(express.static(__dirname + '/public'));

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriends);

