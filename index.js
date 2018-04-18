const express = require('express'),
  app = express(),
  path = require('path'),
  port = 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname,'/dist/'));
})

app.listen(port);
