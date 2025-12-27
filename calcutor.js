const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/calculation/home.html');
});

app.get('/add', (req, res) => {
  res.sendFile(__dirname + '/calculation/add.html');
});

app.post('/add', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  const sum = num1 + num2;
  res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});

app.get('/subtract', (req, res) => {
  res.sendFile(__dirname + '/calculation/subtract.html');
});

app.post('/subtract', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  const difference = num1 - num2;
  res.send(`The difference between ${num1} and ${num2} is ${difference}`);
});

app.get('/multiply', (req, res) => {
  res.sendFile(__dirname + '/calculation/multi.html');
});

app.post('/multiply', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  const product = num1 * num2;
  res.send(`The product of ${num1} and ${num2} is ${product}`);
});

app.get('/divide', (req, res) => {
  res.sendFile(__dirname + '/calculation/divide.html');
});

app.post('/divide', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  if (num2 === 0) {
    res.send("Error: Division by zero is not allowed.");
  } else {
    const quotient = num1 / num2;
    res.send(`The quotient of ${num1} and ${num2} is ${quotient}`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
