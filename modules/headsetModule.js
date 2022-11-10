const mongo = require("../connect");

module.exports.getHeadset = async (req,res,next) => {
    try{
        const headsetData = await mongo.selectedDb.collection("headset").find().toArray();
        res.send(headsetData)
    } catch(err) {
     console.error(err);
     res.status(500).send(err)
    }
 }

module.exports.updateHeadset = async (req,res,next) => {
    try{
        const updatedData = await mongo.selectedDb.collection("headset")
                        .findOneAndUpdate({_id:ObjectId(req.params.id)}, 
                                          {$set: {...req.body}}, 
                                          {returnOriginal : true});
        res.send(updatedData);
    } catch(err) {
        console.error(err);
        res.status(500).send(err)
    }
}

module.exports.createHeadset=async (req,res)=>{
    try {
       
        const insertedResponse = await mongo.selectedDb.collection("headset").insertOne(req.body);  
        
        res.send(insertedResponse);
    }catch(err){
        console.error(err); 
        res.status(500).send(err);
    }
   
};
module.exports.deleteHeadset=async (req,res)=>{
    try{
        const id =req.params.id;
        const deleteData=await mongo.selectedDb
        .collection("headset")
        .remove({_id:ObjectId(id)});
        res.send(deleteData);
    }catch(err){
        console.error(err); 
        res.status(500).send(err);
    }
};
