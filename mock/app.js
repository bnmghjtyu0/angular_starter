var express = require("express");
var tokenRouter = require("./routes/token");
var app = express();

var endpoint = "/api";

//路由
app.use(endpoint + "/token", tokenRouter);

module.exports = app;
