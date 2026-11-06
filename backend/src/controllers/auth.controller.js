const userModel = require("../models/reg.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// const cookieparser = "cookie-parser";

async function registeruser(req, res) {
  const { username, email, password } = req.body;

  const isUserAlreadyExits = await userModel.findOne({
    email,

    // $or:[

    //   {email}
    // ]
  });

  if (isUserAlreadyExits) {
    return res.status(409).json({
      message: "user is alreadyy register",
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const users = await userModel.create({
    username,
    email,
    password: hash,
  });

  const token = jwt.sign(
    {
      id: users._id,
    },
    process.env.JWT_PASSWORD,
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  res.status(201).json({
    message: "user register successfull",
    users,
  });
}

async function loginuser(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email,
  });

  if (!user) {
    return res.status(401).json({
      message: "invelid credential",
    });
  }

  const isPasswordvalid = await bcrypt.compare(password, user.password);

  if (!isPasswordvalid) {
    return res.status(401).json({
      message: "invelid credential",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_PASSWORD,
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
  res.status(200).json({
    message: "user register successfull",
    user,
  });
}

module.exports = { registeruser, loginuser };
