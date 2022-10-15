const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
  service: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

const Services = mongoose.model("Services", servicesSchema);

exports.Services = Services;
