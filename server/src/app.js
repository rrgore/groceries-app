var logger = require('morgan');
var express = require('express');
var cookieParser = require('cookie-parser');
var indexRouter = require('./routes/index');
var cors = require('cors');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api', indexRouter);
app.use(cors());

module.exports = app;