require("dotenv").config();

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

var userRoute = require("./routes/user.route");
var authRoute = require("./routes/auth.route");
var productRoute = require("./routes/product.route");

var authMiddleware = require("./middlewares/auth.middleware");

var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SESSION_SECRET));
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function(req, res) {
  res.render("index.pug", {
    name: "AAA"
  });
});

app.use(express.static("public"));
app.use("/users", authMiddleware.requireAuth, userRoute);
app.use("/auth", authRoute);
app.use("/product", productRoute);

app.listen(port, function() {
  console.log("Server listening on port " + port);
});
