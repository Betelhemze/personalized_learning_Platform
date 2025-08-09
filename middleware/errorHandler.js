const errorHandlder = (err, req,res,next) =>{
 const statusCode = res.statusCode ? res.statusCode : 500;
 res.json({message: err.message});
};
module.exports = errorHandlder;