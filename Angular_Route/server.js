var express=require('express'),
app=express(),
path=require('path');

app.use(express.static(path.join(__dirname, './client')));

app.use(express.static(path.join(__dirname, './bower_components')));

app.listen(8001,function() {});
