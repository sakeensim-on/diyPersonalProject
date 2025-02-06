const handleErrors = (err, req, res, next) =>{
    res
    .status(500)
    .json({message: "Something Wrong"})
}

module.exports = handleErrors
