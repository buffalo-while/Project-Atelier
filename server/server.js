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
// first argument passed to app.all should be the shared part of the incoming url - e.g. '/atelier/server', '/api/resource' or just '/api'
// second parameter should be a callback that does the work of making the API call
// I don't think we need to pass auth as an argument since it is already a global parameter on this page

// app.all('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/*', auth, (req, res) => {

  // I think we'll want to use axios to then make the request to the API, using the generic axios(config) format
    //method: req.method
    // url: will need to extract the portion of originalUrl after '/api' (or the start url we chose)
      //e.g. incoming url is '/api/products' outgoing url should be 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products' or url is just '/products' and we define baseURL for 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/'
    //baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/'
    //headers: req.headers with Authorization property added, or we may be able to use 'auth' property seperately for authorization but don't think we can
    //data: req.body, I think axios will automatically send as json
  //then set res to responses received from API - not sure if we will have to extract status etc separately, maybe will need e.g. (response) => (res.status(response.status).json(response.body);
  //catch any errors and pass along similar to first example in https://axios-http.com/docs/handling_errors but setting to res instead of console loggin (or as well as!)


// })


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening at port: ${PORT}`);
});