const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  theam: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  cotegory: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  youtube: {
    type: Boolean,
    require: true,
  },
  instagram: {
    type: Boolean,
    require: true,
  },
  facebook: {
    type: Boolean,
    require: true,
  },
  priority: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    require: true,
  },
});

const noteModel = mongoose.model("notes", noteSchema);

module.exports = noteModel;
