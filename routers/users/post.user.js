const router = require("express").Router();
const User = require("../../models/user");

const createUserController = async (req, res, next) => {
  try {
    // create user
    const user = new User(req.body);
    // save user in database
    const result = await user.save();

    res.status(201).send({
      status: "SUCCESS",
      message: "New user has been created",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

router.post("/", createUserController);

module.exports = router;
