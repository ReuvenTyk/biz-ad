var express = require("express");
var router = express.Router();

const services = require("../controllers/services");

router.get("/", services.get);
router.post("/", services.add);
router.delete("/", services.delete);
router.patch("/", services.update);

module.exports = router;
