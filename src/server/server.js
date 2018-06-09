const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// app.get('/', (req, res) => res.send('hello world'));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../client/')));

app.listen(1337, () => console.log('Yo your server is running on 1337'));