const express = require('express');

const app = express();

const port = 5000;

const middleware = (req, res, next) => {
    console.log('Hey! Its Middleware!');
    next();
}

app.get('/',(req, res) =>{
    console.log("You're in Home");
    res.send('Hello World!');
});

app.get('/about', middleware, (req, res) =>{
    console.log("You're in About");
    res.send('I am Mahnoor!');
});

app.listen(port, ()=>{
    console.log(`App is listening to port: ${port}`)
});