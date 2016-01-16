var express = require('express');
var app = express();
var fs = require('fs');
var templater = require('./template.engine.js');

app.engine('dlr',templater);

app.get('/', function(req,res){
  res.render('index', {title: 'Waasssuuup', message: 'Bitches!'});
});

var server = app.listen(3000, function(){
console.log("server listening at ", server.address());
});

app.set('views', './templates');
app.set('view engine', 'dlr');