require("dotenv").config();
const config = require('../config.js');
const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');
const app = express();
const auth = {headers: {Authorization: `${config.GITHUB_APIKEY}`} };

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));


//IDK
// app.all('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/*', auth, (req, res) => {

// })


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening at port: ${PORT}`);
});