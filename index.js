const express = require('express');
const { nextTick } = require('process');
const app = express();
const timeRoute = require('./routes/time')






app.get('/', (req, res) => res.send('Hello World!'));
app.use('/iroute',timeRoute);


app.listen(3000, () => console.log('app listening on port 3000!'));