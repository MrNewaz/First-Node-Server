const express = require('express');

const app = express();

const rootCall = (req, res) => res.send('Thank You Very Much');

app.get('/', (req, res) => {
  const fruit = {
    products: 'ada',
    price: 220,
  };
  res.send(fruit);
});

app.get('/fruits/banana', (req, res) => {
  res.send({ fruit: 'banana', quantity: 1000, price: 100000 });
});

app.listen(4200, () => console.log('listening to port 4200'));
