const express=require("express");

const router=express.Router();

const mongodb=require("mongodb");

const app=mongodb.MongoClient;

router.put('/notes/:id',function(req,res){
    var id=req.params.id;
    var title=req.body.title;
    var content=req.body.content;
    //var obj={_id:id};
    app.connect("mongodb://localhost:27017/acadgild",function(err,db){
        db.collection("notes").updateOne({"_id":id},{$set:{"title":title,"content":content,"updatedAt":new Date()}},function(err,result){
            if(err){
                res.send("updation error")
            }else{
                db.collection("notes").find().
                toArray(function(err,array){
                    array.forEach(function(x){
                        if(x._id==id){
                            res.send(x)
                        }
                    })
                })
            }
        });
    });
});

module.exports=router;