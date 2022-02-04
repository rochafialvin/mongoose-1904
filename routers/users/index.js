const router = require("express").Router();
const postUserRouter = require("./post.user");

router.use(postUserRouter);

module.exports = router;
