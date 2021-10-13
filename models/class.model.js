const mongoose = require("mongoose");
const ClassSchema = mongoose.Schema({
  classname: {
    type: String,
    required: true,
  },
  // teacher: {
  //   classname: {
  //     type: String,
  //     required: true,
  //   },
  //   teacher: {
  //     type: String,
  //     required: true,
  //   },
  //   students: {
  //     type: String,
  //   },
  // },
});

const ClassModel = mongoose.model("class", ClassSchema);

module.exports = ClassModel;
