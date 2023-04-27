const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const buyerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    contact:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },

});

buyerSchema.pre("save", async function(next){
    const buyer = this;
    if(buyer.isModified("password")){
        buyer.password = await bcrypt.hash (buyer.password, 8);
    }
    next();
})

buyerSchema.statics.findByCredentials = async (email, password) => {
const buyer = await Buyer.findOne({ email });
if (!buyer) {
  throw new Error("Invalid login credentials");
}
const isMatch = await bcrypt.compare(password, buyer.password);
if (!isMatch) {
  throw new Error("Invalid login credentials");
}
return buyer;
};

buyerSchema.methods.generateAuthToken = async function(){
const buyer = this; 
const token  = jwt.sign ({_id: buyer._id.toString(),role: buyer.role }, process.env.secret_key)

return token;
}

const Buyer = mongoose.model("Buyer",buyerSchema);

module.exports = Buyer