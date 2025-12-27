const express = require('express');
const userRouter = require('./user-route');
const app = express();

// app.use(userRouter);
app.use('/shanto', userRouter); // user-route at /shanto after starting the server

app.use('/temp',(req,res)=>{
    res.status(200).json({
        name : "Meheraj Hossain Shanto",
        message: "Welcome to the home page"
    });
    res.redirect('/'); // redirect to home page
});

app.use('/home',(req,res)=>{
    res.statusCode = 200;
    // res.status(200);
    // res.send('This is the home page');
    res.sendFile(__dirname + '/demo/homepage.html');    //html file as response
});

app.get('/cookies',(req,res)=>{
    // res.cookie('username', 'Meheraj Hossain Shanto'); // set cookie
    // res.cookie('session_id', '21CSE013'); // set another cookie
    res.clearCookie('username'); // clear cookie
    res.clearCookie('session_id'); 
    res.send('Cookies have been set');
    res.end();
});
app.get('/', (req, res) => {    // default root route
    res.send('Hello World!');
});
app.post('/data', (req, res) => {
    res.send('Data received');
});
app.put('/data', (req, res) => {
    res.send('Data updated');
});
app.delete('/data', (req, res) => {
    res.send('Data deleted');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.use((req, res) => {  // this is a 404 handler.it should be at the end
    res.status(404).send('Page not found');
});
module.exports = app;