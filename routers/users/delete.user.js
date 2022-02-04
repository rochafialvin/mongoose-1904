const router = require("express").Router();
const User = require("../../models/user");

const deleteUserByIdController = async (req, res, next) => {
  try {
    // find user by id
    const user = User.findById(req.params.userid);
    // remove (delete) user from collections
    const result = await user.remove();

    res.send({
      status: "SUCCESS",
      message: "User has been deleted",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

router.delete("/:userid", deleteUserByIdController);

module.exports = router;
