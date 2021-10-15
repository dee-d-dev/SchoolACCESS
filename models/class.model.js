const mongoose = require("mongoose");
const ClassSchema = mongoose.Schema({
  classname: {
    type: String,
    required: true,
  }
});

const ClassModel = mongoose.model("class", ClassSchema);

module.exports = ClassModel;
