const express = require("express")
const router = express.Router();
const authControllers = require("../controllers/auth-controller")

//@ENDPoint http://localhost:8000/api/register
router.post("/register")


//export
module.exports = router