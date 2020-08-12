const express = require("express")
const router = express.Router()

router.get("/workers", (rec, res)=>{
    res.send({method:"GET"})
})

module.exports = router