const express = require("express")
const cors =require("cors")
const morgan = require("morgan")
const handleErrors =require("./middlewares/error")

const app = express()

//middleware
app.use(cors()) // Allow cross domain
app.use(morgan("dev")) // show log terminal
app.use(express.json()) // for read json
app.use(handleErrors)

//Routing


//MiddleWare 


//Error

const PORT = 8000
app.listen(PORT, () => console.log(`Server running on ${PORT}`))