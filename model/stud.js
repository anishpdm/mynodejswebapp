const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    name:{type:String},
    rollno:{type:String},
    admno:{type:String},
    college:{type:String}

});

var studModel = mongoose.model('mystudents', studentSchema);

module.exports={studModel}
