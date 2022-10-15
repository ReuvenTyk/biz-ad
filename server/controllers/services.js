const { Service, Services } = require("../models/services");

module.exports = {
  get: async function (req, res, next) {
    try {
      const result = await Service.find({});
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(400).send("error getting Services");
    }
  },

  add: async function (req, res, next) {
    try {
      const newService = new Services(req.body);
      const result = await newService.save();
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(400).send("error adding user");
    }
  },

  delete: async function (req, res, next) {
    try {
      await Service.deleteOne({ _id: req.body._id }).exec();
      res.json({ _id: req.body._id });
    } catch (err) {
      console.log(err);
      res.status(400).send("error delete Service");
    }
  },

  update: async function (req, res, next) {}, //todo
};
