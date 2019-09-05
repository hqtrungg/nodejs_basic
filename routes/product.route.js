var express = require("express");
var router = express.Router();

var controller = require("../controllers/product.controller");

router.get("/search", controller.productSort);
router.get("/", controller.productSort);
router.get("/:page", controller.get);

module.exports = router;
