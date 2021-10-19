const mongoose = require("mongoose");
const ClassSchema = mongoose.Schema({
  classname: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
});

const ClassModel = mongoose.model("class", ClassSchema);

module.exports = ClassModel;
