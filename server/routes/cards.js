var express = require("express");
var router = express.Router();
const cards = require("../controllers/cards");

router.get("/", cards.getCards);
router.get("/:id", cards.findCard);
router.get("/sort/:dir", cards.sortCards);

module.exports = router;
