const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://niteshgupta8161:Nitesh@1234@cluster0.twzzcdv.mongodb.net/gofood?retryWrites=true&w=majority'
const mongoDB =async() =>{
await mongoose.connect(mongoURI,{ useNewUrlParser: true }, async(err,result) =>{ 
   if(err)console.log("---",err);
   else{
    console.log("connected");
    const fetched_data = await mongoose.Connection.db.collection("sample");
    fetched_data.find({}).toArray(function(err,data){
     if(err) console.log(err);
     else{
        
     }

    })
   }
});
}

module.exports = mongoDB;