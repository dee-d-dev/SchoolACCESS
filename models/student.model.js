const { ObjectID } = require("bson");
const mongoose = require("mongoose");
const StudentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // sex: {
  //   type: String,
  //   required: true,
  // },
  // age: {
  //   type: String,
  //   required: true,
  // },
  // class: {
  //   type: ObjectID,
  //   required: true,
  // },
});

const StudentModel = mongoose.model("student", StudentSchema);

module.exports = StudentModel;
