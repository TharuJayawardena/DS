const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose');

const app = express()
dotenv.config()


app.use(cors())
app.use(express.json())

const uri = process.env.MONGO_CONNECTION_STRING





const apiRoutes=  require('./routes/apiRoutes')
app.use("/api",apiRoutes)

const port = process.env.PORT || 5000

mongoose.connect(uri).then(() => {
    app.listen(port,()=>{
        console.log(`service one started port ${port}`)
    })

}).catch((error) => {
    console.error(error)
})
