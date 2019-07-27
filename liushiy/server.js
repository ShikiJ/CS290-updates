var express = require('express'); 
var app = express();
var bodyparse = require('body-parser');
var urlencodedbodyparse = bodyparse.urlencoded({extended:false}); 
// import express module 

app.set('view engine','ejs');


//!     -> forget how to use express already! 
//!      http in an outofbox module wihle express is a 3rd party module

// set middleware for error hadnling.  

app.get('/',(req,res)=>{
    res.sendfile('index.html');
});

app.get('/test',(req,res)=>{
    console.log("get route has been successfully modified");
    res.render('getresp',{getdata:req.query});
});

app.post('/test',urlencodedbodyparse,(req,res)=>{
    console.log("post route has been successfully fired and parse the body yield");
    console.log(req.query);
    console.log(req.body.phone);
    res.render('postres', {bdata: req.body, qdata:req.query});
});

app.use(function(req,res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - You computer has benen locked');
  });
  app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.send('500 - FBI Warning Your Are Visiting Illegal Website');
  });
app.listen(3000);

