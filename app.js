var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require("body-parser");
var indexRouter = require('./routes/index');
var sanitizer = require("express-sanitizer");
const PORT =  process.env.PORT || 3000; 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(sanitizer());
app.use('/', indexRouter);

app.listen(PORT, process.env.IP, function(){
  console.log("app has started");
});


