const express = require('express')
const router = express.Router();

const {getHotels,  addHotels, updateHotels,  deleteHotels} = require('../controllers/controller')

router.get("/hotels",getHotels)
router.post("/hotels",addHotels)
router.patch("/hotels",updateHotels)
router.delete("/hotels", deleteHotels)




module.exports = router