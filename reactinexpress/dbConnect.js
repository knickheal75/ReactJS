const mongoose = require("mongoose");

module.exports= mongoose.connect('mongodb://nikhil751:beckham23@ds161285.mlab.com:61285/contactform1',{ useNewUrlParser: true },function(err){
    if(err){
        throw err;
    }
    else{
        console.log("Successfully Connected to the DataBase");
    }
})
