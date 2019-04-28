var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var exphbs = require('express-handlebars');
var routes = require('./routes/index');
var users = require('./routes/users');
var helpers = require('./lib/helpers');

// Database
//var mongo = require('mongodb');
//var monk = require('monk');
//var db = monk('localhost:27017/nodetest2');
    
var app = express();

// Create `ExpressHandlebars` instance with a default layout.
var hbs = exphbs.create({
    defaultLayout: 'main',
    helpers      : helpers,
    partialsDir: [
        'views/partials/'
    ]
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /client
//app.use(favicon(__dirname + '/client/favicon.ico'));
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'client')));

// Make our db accessible to our router
app.use(function(req,res,next){
    //req.db = db;
    next();
});

app.use('/', routes);
app.use('/users', users);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
