var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoConnect = require('./util/database').mongoConnect;
//const MongoStore = require('connect-mongo')(session);
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRoutuer = require('./routes/auth');
var logoutRouter = require('./routes/logout');
var passportConfig = require('./passport');
var passport = require('passport');
require('dotenv').config();
var app = express();
passportConfig();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'assets')));
app.set('port',process.env.PORT || 5000)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//social auth
app.use(session({
 
  resave:false,
  saveUninitialized:true,
  secret:process.env.SECRET
 
}));
app.use(passport.initialize())
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth',authRoutuer);
app.use('/logout',logoutRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



mongoConnect(()=>{
  // console.log(client);
  const server = app.listen(process.env.PORT||app.get('port'),()=>{
    console.log(`express server on http://localhost:${server.address().port}`);
  })
});

module.exports = app;
