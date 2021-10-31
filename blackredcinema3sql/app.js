const express = require('express');
var mysql = require('mysql');
const router = express.Router();
const app = express();
const expressEjsLayout = require('express-ejs-layouts')
const flash = require('connect-flash');
const session = require('express-session');
const PORT = 3000;


//EJS
app.set('view engine','ejs');
app.use(expressEjsLayout);
app.use(express.urlencoded({extended : false}));
//express session
app.use(session({
    secret : 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
   
//Reitit
var registrationRouter = require('./routes/registration-route');
var loginRouter = require('./routes/login-route');
var reservationsRouter = require('./routes/reservations-Route');
var logoutRouter = require('./routes/logout-route');
var index = require('./routes/index');
app.use('/', index);
app.use('/', registrationRouter);
app.use('/', loginRouter);
app.use('/', reservationsRouter);
app.use('/', logoutRouter);
app.use(express.static('public'));


app.listen(PORT, ()=>{
    console.log(`Serveri käynnissä portilla: ${PORT}`);
})
console.log('              __ ');
console.log('             .¨  ¨. ');
console.log('             :      :');
console.log('             | _  _ |');
console.log('          .-.|(o)(o)|.-.        _._          _._');
console.log('         ( ( | .--. | ) )     .¨,_ ¨.      .¨ _,¨.');
console.log('          ¨-/ (    ) \-¨     / /¨ `\ \ __ / /¨ `\ \ ');
console.log('           /   ¨--¨   \     / /     \.¨  ¨./     \ \ ');
console.log('           \ `"===="` /     `-`     : _  _ :      `-`');
console.log('            `\      /¨              |(o)(o)|');
console.log('              `\  /¨                |      |');
console.log('              /`-.-`\_             /        \ ');
console.log('        _..:;\._/V\_./:;.._       /   .--.   \ ');
console.log('      .¨/;:;:;\ /^\ /:;:;:\¨.     |  (    )  | ');
console.log('     / /;:;:;:;\| |/:;:;:;:\ \    _\  ¨--¨  /__');
console.log('    / /;:;:;:;:;\_/:;:;:;:;:\ \ .¨  ¨-.__.-¨   `-.');
