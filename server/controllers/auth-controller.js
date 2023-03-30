
const jwt = require("jsonwebtoken");
const Seller = require("../models/Seller");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.secret_key);
    const seller = await Seller.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!seller) {
      throw new Error();
    }

    req.token = token;
    req.user = seller;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = auth;