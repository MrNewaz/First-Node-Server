const express = require('express');

const app = express();

const rootCall = (req, res) => res.send('Thank You Very Much');

app.get('/', (req, res) => {
  res.send('Thank you very much----Yeeeet');
});

app.listen(4200, () => console.log('listening to port 4200'));
