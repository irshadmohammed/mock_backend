const express = require("express");
const router = express.Router();
let players = require("../dummyDatabase");

router.post("/list", async (req, res) => {
  console.log('res', res);
  try {
    res.status(200).json({
      data: players
    });
  } catch (err) {
    console.log('err', err);
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});
router.get("/list/:id", async (req, res) => {
  let { id } = req.params;
  id = Number(id);
  try {
    let player = players.find(player => player._id === id);
    res.status(200).json({
      data: player
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

module.exports = router;