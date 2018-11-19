var express=require("express");

var app=express();

var bodyparser=require("body-parser");

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}));

var fetch=require('./fetch/fetch');
app.use('/',fetch);

var insert=require('./insert/insert');
app.use('/',insert);

var remove=require('./remove/remove');
app.use('/',remove);

var update=require("./update/update");
app.use('/',update);

app.listen(8080,function(){
    console.log("server listening at port no.8080")
});