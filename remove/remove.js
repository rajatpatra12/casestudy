const express=require("express");

const router=express.Router();

const mongodb=require("mongodb");

const app=mongodb.MongoClient;

router.delete('/notes/:id',function(req,res){
    var id=req.params.id;
    //var obj={_id:id};
    app.connect("mongodb://localhost:27017/acadgild",function(err,db){
        db.collection("notes").find()
        .toArray(function(err,array){
            array.forEach(function(x){
                if(x._id==id){
                    db.collection("notes").deleteOne(x,function(err,result){
                        if(err){
                            res.send("deletion error")
                        }else{
                            res.send({"message":"Note Deleted Successfully"})
                        }
                    });
                }
            })
        })
    });
});

module.exports=router;