const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const users = ['Asad', 'Moin', 'Saber', 'Susmita', 'Sohana'];

// Get

app.get('/fruits/banana', (req, res) => {
  res.send({ fruit: 'banana', quantity: 1000, price: 100000 });
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const name = users[id];
  res.send({ id, name });
});

// Post

app.post('/adduser', (req, res) => {
  const user = req.body;
  user.id = 55;
  res.send(user);
});

app.listen(4200, () => console.log('listening to port 4200'));
