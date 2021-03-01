const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Collection2Schema = Schema({
  message: { type: String, required: true },
  day: { type: String, required: true },
  time: { type: String, required: true },
});
module.exports = mongoose.model(
  "Collection2",
  Collection2Schema,
  "Collection2"
);
