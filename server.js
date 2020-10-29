"use strict"
const http = require('http');
const quotes = require('./quotes');

http.createServer((req, res) => {
    res.writeHead(500);
    res.write(quotes.goodPlaceQuotes[Math.floor(Math.random() * quotes.goodPlaceQuotes.length)]);
    res.end();
}).listen(3000, () => {
    console.log('your server is listening on 3000');
})