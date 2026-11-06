const express = require("express");
require("dotenv").config();

const authroutes = require("./routes/auth.routes");
const noteroutes = require("./routes/note.routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://content-planner-seven-gilt.vercel.app",
    ],
    credentials: true,
  }),
);
// app.use(cors());
app.use(express.json());
app.set("trust proxy", 1);
app.use(cookieParser());

app.use("/api/auth", authroutes);
app.use("/api/note", noteroutes);
// app.post("/reg", async (req, res) => {
//   const data = req.body;
//   console.log(data);
//   await regModel.create({
//     name: data.name,
//     email: data.email,
//     password: data.password,
//     repassword: data.repassword,
//   });

//   res.status(201).json({
//     message: "submited",
//   });
// });

// app.get("/reg", async (req, res) => {
//   const users = await regModel.find();

//   res.status(200).json({
//     message: "user find successfully",
//     users,
//   });
// });

// app.delete("/reg/:id", async (req, res) => {
//   const id = req.params.id;

//   await regModel.findOneAndDelete({
//     _id: id,
//   });

//   res.status(200).json({
//     message: "delete successfully",
//   });
// });

// app.patch("/reg/:id", async (req, res) => {
//   const id = req.params.id;
//   const email = req.body.email;

//   await regModel.findOneAndUpdate(
//     {
//       _id: id,
//     },
//     {
//       email: email,
//     },
//   );

//   res.status(200).json({
//     message: "update successfully",
//   });
// });

module.exports = app;
