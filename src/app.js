const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes/index') //import routes module

// settings
app.set('port', process.env.PORT || 3000); //port setted or 3000
app.set('views', path.join(__dirname, 'views'));  //create views directory with join method. "views" must be on the same directory
app.set('view engine', 'ejs');  //select ejs as template manager


// middlewares              https://expressjs.com/en/guide/using-middleware.html
app.use((req, res, next) => {   //process the url's that the browser send
    console.log(`${req.url} -${req.method}`);   //request and shows the url and the method used
    next();  
});

app.use(express.json());
app.use(express.urlencoded({exteded: false})); 


// routes
app.use(routes); //use routes to define the url's


// static files
app.use(express.static(path.join(__dirname, 'public')));    //middleware to set public folder direction where are static files


// start server
app.listen(app.get('port'), ()=>{
    console.log("Server on port ", app.get('port'))  //start server with the selected port
});
