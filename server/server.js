require("dotenv").config();
const config = require('../config.js');
const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');
const app = express();
const auth = `${config.GITHUB_APIKEY}`;
const morgan = require('morgan')

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(morgan('dev'))



// Add authorization API key, pass requests to API with axios and return responses to client
app.all('/api/*', (req, res) => {
  console.log('API request received: ', req.method, ' to url ', req.originalUrl);
  axios({
    method: req.method,
    url: req.originalUrl.slice(4),
    baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/',
    headers: {Authorization: auth},
    data: req.body
  }).then((response) => {
    res.status(response.status).json(response.data);
    console.log('API call successful, status: ', response.status);
  }).catch((err) => {
    res.status(500).json({message: err});
    if (err.response) {
      console.log('Error received from API: ', err.response.status, '\n Data: ', err.response.data, '\n Headers: ', err.response.headers)
    } else if (err.request) {
      ('Error, request made no response received: ', err.request);
    } else {
      console.log('Error, no request sent: ', err.message);
    }
  })
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening at port: ${PORT}`);
});
