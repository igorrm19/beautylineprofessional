const express = require("express");
const router = express.Router();

const userRouter = require("./user.router");
const productRouter = require("./product.router");

router.use("/", userRouter);
router.use("/", productRouter);

module.exports = router;
