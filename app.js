const express = require('express');
const Web3 = require('web3').Web3;
const ejs = require('ejs');
const path = require('path'); // <-- FIX #1: Added path module
const app = express();

// Connect to an Ethereum node using an environment variable
const web3 = new Web3(process.env.INFURA_URL);

// Set the view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // <-- FIX #2: Added absolute path for views

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public'))); // <-- FIX #3: Added absolute path for public

// Define a route to render the index.ejs template
app.get('/', (req, res) => {
    res.render('index');
});

// Export the app for Vercel
module.exports = app;
