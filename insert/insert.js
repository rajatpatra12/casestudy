const express=require("express");

const router=express.Router();

const mongodb=require("mongodb");

const app=mongodb.MongoClient;

router.post('/notes',function(req,res){
    let title=req.body.title;
    let content=req.body.content;
    let obj={updatedAt:new Date(),createdAt:new Date(),title:title,content:content,__v:0}
    app.connect("mongodb://localhost:27017/acadgild",function(err,db){
        db.collection("notes").insert(obj,function(err,result){
            if(err){
                res.send("insertion error")
            }else{
                res.send(obj)
            }
        });
    });
});

module.exports=router;