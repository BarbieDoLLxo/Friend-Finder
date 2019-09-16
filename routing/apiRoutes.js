var express = require("express");
var http = require("http");
require("./routing/htmlRoutes")(app);

var app = express();

app.get("/api/friends", function(req, res) {
    return res.json(friends);
});

app.get("/api/friends/: friends", function(req, res) {
    var chosen = req.params.friends;
    console.log(chosen);
for (var i = 0; i < friends.length; i++) {
if (chosen === friends[i].routeName) {
    return res.json(friends[i]);
}
}
return res.json(false);
});