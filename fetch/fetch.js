var express=require("express");

var router =express.Router();

var mongodb=require("mongodb");

var app=mongodb.MongoClient;


router.get('/notes',function(req,res){
    app.connect("mongodb://localhost:27017/acadgild",function(err,db){
        db.collection("notes").find()
        .toArray(function(err,array){
            res.send(array);
        });
    });
});

router.get('/notes/:id',function(req,res){
    var id=req.params.id;
    app.connect("mongodb://localhost:27017/acadgild",function(err,db){
        db.collection("notes").find()
        .toArray(function(err,array){
            //res.send(array);
            array.forEach(function(x){
                if(x._id==id){
                    res.send(x)
                }
            })
        });
    });
});

module.exports=router;