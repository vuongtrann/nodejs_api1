const express = require('express');
const morgan = require('morgan');
const { engine } = require( 'express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');

//Khai báo static path
app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded({
  extended: true
}));//middleware của express
app.use(express.json());


//HTTP logger
app.use(morgan('combined'));
// Template engine
app.engine('hbs', engine({
  //khai báo config đuôi file
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))
//console.log('PATH :', path.join(__dirname, 'resources/views') );

//route init
route(app);



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})