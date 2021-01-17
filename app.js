const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require("mongoose");

var {studModel}= require('./model/stud')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//mongoose.connect("mongodb+srv://anish:anishtest@cluster0.zf1or.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology: true });
mongoose.connect("mongodb://localhost:27017/testdb", { useNewUrlParser: true });


app.post('/read', async(req,res)=>{

    try{

        var data=req.body;
        console.log(data);

        var studentData=new studModel(req.body);

        console.log(studentData);
        var result=await studentData.save();

        res.json(result);
       


    }
    catch(error)
    {
    res.status(500).send(error)
    }


})


app.get("/viewall",async(req,res)=>{

    try{
       
        var result= await studModel.find();

        res.json(result);
        

    }
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }

})


app.post("/search",async(req,res)=>{

    try{

        studModel.find(req.body,  (error,data)=>{

            if(error){

                throw error;
            }
            else{

                res.json(data)

            }

        }  )

    }
    catch(error)
    {
        res.status(500).send(error)
    }
})





app.listen(process.env.PORT || 3000, function() {
    console.log('Your node js server is running at http://localhost:3000');
});