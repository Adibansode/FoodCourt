var express=require('express');
var app=express();
app.use(express.static('Food court'))
app.get("/",(req, res)=>{res.send("Welcome to  Food court..........");});
app.get("/product",(req, res)=>{var p={ "id":45, "title":"Gerbera","description":"Wedding Flower", "unitprice":14, "quatity":7000 };
                                       res.send(p);
});
app.listen(8080);
console.log("App is listening on port 8080");

// const express = require("express");
// const app = express();
// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/index.html");
// });
// app.get("/services", function (req, res) {
//     res.sendFile(__dirname + "/services.html");
// });
// app.listen(8080, function () {
//     console.log("Server is running on localhost8080");
// });