const mongoose = require("mongoose");
const SchoolSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const SchoolModel = mongoose.model("school", SchoolSchema);

module.exports = SchoolModel;
