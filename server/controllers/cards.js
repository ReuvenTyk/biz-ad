const { Card } = require("../models/cards");
const joi = require("joi");
const path = require("path");
const fs = require("fs");

module.exports = {
  getCards: async function (req, res, next) {
    try {
      const result = await Card.find().sort({ name: 1 }).limit(20);
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(400).send("error getting cards");
    }
  },

  findCard: async function (req, res, next) {
    try {
      const scheme = joi.object({
        id: joi.string().required(),
      });

      const { error, value } = scheme.validate(req.params);
      if (error) {
        console.log(error.details[0].message);
        res.status(400).send("invalid id");
        return;
      }

      const result = await Card.findOne({ _id: value.id });
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(400).send("error getting card");
    }
  },

  sortCards: async function (req, res, next) {
    try {
      const scheme = joi.object({
        dir: joi.number().required().valid(1, -1).default(1),
      });

      const { error, value } = scheme.validate(req.params);
      if (error) {
        console.log(error.details[0].message);
        res.status(400).send("invalid direction");
        return;
      }

      const result = await Card.find()
        .sort({ name: +value.dir })
        .limit(20);

      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(400).send("error sorting card");
    }
  },
};
