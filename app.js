const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require("mongoose");

var {studModel}= require('./model/stud')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://anish:anishtest@cluster0.zf1or.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology: true });


app.post('/read', async(req,res)=>{

    try{

        var data=req.body;

        var studentData=new studModel(data);

        var result=await studentData.save();

        res.json(result);
       


    }
    catch(error)
    {
    res.status(500).send(error)
    }


})


app.listen(process.env.PORT || 3000, function() {
    console.log('Your node js server is running at http://localhost:3000');
});