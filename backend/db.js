const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://niteshgupta8161:Nitesh@1234@cluster0.twzzcdv.mongodb.net/fooddeli?retryWrites=true&w=majority'
const mongoDB =() =>{
mongoose.connect(mongoURI, () =>{
    console.log("connected");

});  
}

module.exports = mongoDB;