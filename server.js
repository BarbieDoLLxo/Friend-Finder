var express = require("express");
var path = require("path");
var http = require("http");
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// require("./routing/apiRoutes")(app);
// require("./routing/htmlRoutes")(app);
var server = http.createServer(handleRequest);
function handleRequest(req, res){
    var requestData = "";
    req.on("data", function(data){
        requestData += data;
    });
    req.on("end", function(){
        console.log("You found a good friend");
        res.end();
    });
    requestData();
}
app.listen(PORT, function(){
    console.log("app listening on PORT" + PORT);
});
