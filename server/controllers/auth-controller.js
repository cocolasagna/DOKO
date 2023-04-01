
const jwt = require("jsonwebtoken");
const Seller = require("../models/Seller");


const auth = async (req, res, next) => {

  console.log('authentication')
 const token =  req.cookies.jwtToken 
  console.log(token)
  try {
 
   
   // const token = req.header("Authorization").replace("Bearer ", "");
   //const token = Cookies.get("access_token") 
  
    const decoded = jwt.verify(token, process.env.secret_key);
    const seller = await Seller.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!seller) {
      throw new Error();
    }

    req.token = token;
    req.seller = seller;
   
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = auth;