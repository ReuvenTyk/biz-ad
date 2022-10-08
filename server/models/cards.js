// const { string } = require('joi');
const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  bizNum: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  address: {
    type: Number,
    require: true,
  },
  weUrl: {
    type: Number,
    require: true,
  },
  imgUrl: {
    type: String,
    require: true,
  },
});

const Card = mongoose.model("Card", cardSchema);

exports.Card = Card;
