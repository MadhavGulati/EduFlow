var app = require('express')();
var http = require('http').createServer(app);
const express = require('express');

app.use(express.static('public', { extensions: ['html', 'json', 'css'] }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

var port = 3000;

http.listen(3000, () => {
  console.log(`listening on port ${port}`);
});
