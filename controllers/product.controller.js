var db = require("../db");

module.exports.productSort = function(req, res) {
  var page = parseInt(req.query.page) || 1;
  var perPage = 8;

  var start = (page - 1) * perPage;
  //   var end = page * perPage;
  res.render("product/index", {
    products: db
      .get("products")
      .drop(start)
      .take(perPage)
      .value(),
    page: page
  });
};

module.exports.get = function(req, res) {
  var page = req.params.page || 1;
  var perPage = 8;
  var start = (page - 1) * perPage;
  var totalProduct = db.get("products").value().length
  var total = (totalProduct/perPage).toFixed(0);

  var product = db
    .get("products")
    .drop(start)
    .take(perPage)
    .value();
  
  res.render("product/index", {
    products: product,
    page: parseInt(page),
    total: total
  });
};
