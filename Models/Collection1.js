const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Collection1Schema = Schema({
  message: { type: String, required: true },
  day: { type: String, required: true },
  time: { type: String, required: true },
});
module.exports = mongoose.model(
  "Collection1",
  Collection1Schema,
  "Collection1"
);
