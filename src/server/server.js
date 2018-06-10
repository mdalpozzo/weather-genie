const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config()

// const { API_KEY } = process.env;

const app = express();

// app.get('/', (req, res) => res.send('hello world'));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../client/')));

app.get('/forecast', (req, res) => {
  axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=5391997&APPID=${API_KEY}`)
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(1337, () => console.log('Yo your server is running on 1337'));
