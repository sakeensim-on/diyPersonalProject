exports.register = (req, res, next) =>{
    try {
        // code
        res.json({message: "Hello register"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message :"Server Error"})
    }
}

exports.login =(req,res,next)=>{
    try {
        res.json({message: "Hello, Login"})
    } catch (error) {
        next(error)
    }
}

exports.currentUser = () => {
    try {
        res.json({message: "Helllo, current user"})
    } catch (error) {
        next(error)
    }
}