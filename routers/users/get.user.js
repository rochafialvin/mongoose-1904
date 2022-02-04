const router = require("express").Router();
const User = require("../../models/user");

const getAllUserController = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(201).send({
      status: "SUCCESS",
      message: "Success get all users",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

const getUserByIdController = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userid);

    res.status(201).send({
      status: "SUCCESS",
      message: "Success get all users",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

router.get("/", getAllUserController);
router.get("/:userid", getUserByIdController);

module.exports = router;
