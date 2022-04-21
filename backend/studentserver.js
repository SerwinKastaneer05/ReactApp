const express = require("express");
const app = express();
const cors=require('cors')
app.use(cors());
const bodyParser = require('body-parser');
require('dotenv').config();

// app.use(express.json())
// app.use(express.urlencoded({extended:false}))
// using bodyParser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT;

app.use('/', require("./routes/routes"))

app.listen(port,()=>{
    console.log("connected");
})