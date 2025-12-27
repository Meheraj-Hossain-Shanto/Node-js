const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.get('/userid/:id/userName/:name', (req, res) => { //http://localhost:3000/userId/13/userName/shanto
//   const id = req.params.id;
//   const name = req.params.name;

//   res.send('My name is ' + name + ' and my student id is ' + id);
// });

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/form.html');
});

app.post('/register', (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  res.send('My name is ' + name + ' and my student id is ' + id);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// app.get('/', (req, res) => {
//   const id = req.query.id;
//   res.send('My student id is ' + id);
// });

