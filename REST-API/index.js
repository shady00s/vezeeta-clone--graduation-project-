require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const doctorsRoute = require('./routes/doctorsRoutes')
const app = express()
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

// doctors route
app.use('/', doctorsRoute)

// app.use('/',getUsers)
// app.use('/',postUsersData)
// app.use('/',getDoctors)



mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(result =>
    app.listen(4400),
    console.log("connected to database")
).catch(e =>
    console.log(e))



