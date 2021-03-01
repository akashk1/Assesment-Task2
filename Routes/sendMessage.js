const express = require("express");
const router = express.Router();

const Collection1 = require("../Models/Collection1");

router.post("/add", (req, res, next) => {
  console.log(req.body);
  const data = {
    message: req.body.message,
    day: req.body.day,
    time: req.body.time,
  };
  const collection1 = new Collection1(data);
  collection1.save((err, result) => {
    if (err) {
      return res.status(404).json({
        title: "An error occured",
        error: err,
        success: false,
      });
    }
    return res.status(200).json({
      data: result,
      success: true,
    });
  });
});

module.exports = router;
