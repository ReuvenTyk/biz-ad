var express = require("express");
var router = express.Router();

const services = require("../controllers/services");

router.get("/", services.get);
router.post("/add", services.add);
router.delete("/", services.delete);
router.patch("/:id", services.update);

module.exports = router;
