const router = require("express").Router();
const User = require("../../models/user");

const editUserController = async (req, res, next) => {
  // req.body = {name: "Alan Turing", password : "password123"}
  // keys = ["name", "email"]
  try {
    const user = await User.findById(req.params.userid);

    const keys = Object.keys(req.body);
    keys.forEach((key) => {
      // key : "email"
      // user[email] = req.body[email]
      user[key] = req.body[key];
    });

    const result = await user.save();

    res.send({
      status: "SUCCESS",
      message: "Success update user",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

router.put("/:userid", editUserController);

module.exports = router;
