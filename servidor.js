const http = require("http");
const express = require("express");
const app = express();

app.get("/", function(req, res){
res.send("<h1>Server running with ExpressJS</h1>");
});


http.createServer(app).listen(3000, () => console.log("Server running local on port 3000"))
