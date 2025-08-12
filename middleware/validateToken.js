const asyncHandler = require("express-async-handler");

const jwt = require("jsonwebtoken");
//for protected routes, the client includes the token on the authorization header
//this middleware checks the token validty using the secret key
const validateToken = asyncHandler(async (req, res, next) => {
  //whenever a user is sending a request, token passed in the header section
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    //extract the token
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("user is not authorized");
      }
      req.user = decoded.user;
      next();
    });

    if(!token){
        res.status(401);
        throw new Error("user is not authorized or token missing in the request!")
    }
  }
});
module.exports = validateToken;
