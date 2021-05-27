const express = require('express');
const app = express();
const axiosBase = require("axios");
const axios = axiosBase.create({
  baseURL: 'https://asia-northeast1-itengineer.cloudfunctions.net/',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'  
});

app.set('view engine', 'ejs');
app.get('/', function(req, res) {
  axios.get('/dc2_proto_api/users')
  .then(function(response) {
	res.render('pages/index', {users:response.data} );
  })
  .catch(function(error) {
	console.log('ERROR!! occurred in api.')
  });
});

module.exports = {
  app
};
