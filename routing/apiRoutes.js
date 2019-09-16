var friends = require("../data/friends.js");
module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
         res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var results = req.body;
        console.log(req.body);

        var bestMatch =[];
        var scoreDif = 0;

        var responseData = {
            newUser: req.body,
            bestMatch: null
        };
        for (var i =0; i < friends.length; i++) {
            dif += Math.abs(friends[i].scores[j] - results[j]);
        }
if (i === 0 || dif <  scoreDif) {
    responseData.bestMatch = friends[i];
    scoreDif = dif;
}


res.join(responseData);
});
};







for (var i = 0; i < friends.length; i++) {
if (chosen === friends[i].routeName) {
     res.json(friends[i]);
}

}

res.json(responseData);
