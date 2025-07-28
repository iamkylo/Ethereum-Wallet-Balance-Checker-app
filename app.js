const express = require('express');
const Web3 = require('web3').Web3;
const ejs = require('ejs');
const path = require('path');
const app = express();

// Connect to an Ethereum node (e.g., Infura)
const web3 = new Web3(process.env.INFURA_URL); // Replace with your Infura API URL

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route to render the index.ejs template
app.get('/', (req, res) => {
    res.render('index');
});

module.exports = app;
