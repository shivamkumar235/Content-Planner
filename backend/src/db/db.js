const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGOOSE_URI);

    console.log("Mongodb connected succesfully");
  } catch (err) {
    console.log("database connected error", err);
  }
}

module.exports = connectDB;
