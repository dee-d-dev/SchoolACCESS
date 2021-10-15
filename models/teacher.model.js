const mongoose = require("mongoose");
const TeacherSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  field: {
    type: String,
    required: true,
  },
});

const TeacherModel = mongoose.model("teacher", TeacherSchema);

module.exports = TeacherModel;
