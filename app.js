const express = require('express');
const router = require('./routes/router')
const app =  express();
const PORT = 4444;
const mongoose = require('mongoose')
const methodOverride = require('method-override')

// setting up view engine

app.set('view engine', 'ejs');

// database connection

function connection (){
    mongoose.connect('mongodb+srv://MarcPedrin:Mnap1012@testcluster.0ifpi.mongodb.net/TestApp?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    console.log('connected to DB')
}

connection()

//middle ware:
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

//real routes
app.use('/', router)



app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
