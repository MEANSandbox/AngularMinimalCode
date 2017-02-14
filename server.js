var express = require('express')
var app = express()
app.set('port',3000)
app.use('/public',express.static(__dirname+'/public'))
app.use('/bower_components',express.static(__dirname+'/bower_components'))
app.use('/node_modules',express.static(__dirname+'/node_modules'))
app.get('/',function(req,res){
    res.sendFile('index.html',{root:__dirname+'/public'})
})
app.listen(app.get('port'),function(err){
    console.log("App is Running At PORT NO: ",app.get('port'));
})