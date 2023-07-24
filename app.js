const express = require("express")
const mongoose = require("mongoose")

const appRoute = require("./routes/appRoute")

const app = express()

// app.use('/' , appRoute)  // if i use over here it will not work cause js works top to bottom

app.use(express.json()); // allow all incoming json
app.use(express.urlencoded({extended:false}))

app.use('/' , appRoute)

const MONGO_URI = "mongodb://127.0.0.1:27017/restaurantsDB"

mongoose.connect(MONGO_URI).then(() => {
       console.log("DB CONNNECTED") 
    app.listen(6000 , () => {

        console.log("server running port 6000")
    })

}).catch((error) => {

    console.log(error)
})