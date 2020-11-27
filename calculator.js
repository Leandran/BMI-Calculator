
const express = require("express");
const bodyParser = require("body-parser");

// function which represents the express module and saved in a new variable

const app = express();

// this method is used when data is parsed from a html form and post nested objects 

app.use(bodyParser.urlencoded({extended: true}));

// using the get method and callback function

app.get("/bmi", function(req, res){

    // this allows to grab the current files location at anytime and append the location to it
    res.sendFile(__dirname + "/index.html");
});

app.post("/bmi", function(req, res){

    var weight = parseFloat(req.body.n1);
    var height = parseFloat(req.body.n2);

    var result = weight / (height * height);

    res.send("your BMI is " + result);

});

// choosing the port to run the server on locally

app.listen(3000,function() {
    console.log("server is running on port 3000");
});
