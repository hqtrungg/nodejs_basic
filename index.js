var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var userRoute = require("./routes/user.route");

var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function(req, res) {
  res.render("index.pug", {
    name: "AAA"
  });
});

app.use(express.static('public'))
app.use("/users", userRoute);

app.listen(port, function() {
  console.log("Server listening on port " + port);
});
