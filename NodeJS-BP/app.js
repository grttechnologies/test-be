const express = require('express');
const app = express();
const helmet = require('helmet');
require('./config/config.js');
require('./db/connection');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const expressValidator = require('express-validator');
let allRoutes = require('./router')
let morgan = require('morgan');
const port = 3000;
var cors = require('cors')
app.use(cors()) // Use this after the variable declaration

app.use(morgan('dev'));
app.use(helmet());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: true}
}));
app.use(expressValidator());

/** 
ALL THE ROUTES ARE NAVIGATED FROM HERE
*/
app.use(allRoutes)

app.listen(port, () => {
    console.log(`App Started on port: ${port}`);
});