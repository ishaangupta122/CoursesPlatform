const express = require("express");
const router = express.Router();
const Placement = require("../models/Placement");

router.post("/", async (req, res) => {
  const placement = new Placement(req.body);
  try {
    await placement.save();
    res.status(201).send(placement);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const placements = await Placement.find();
    res.status(200).send(placements);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const placement = await Placement.findById(req.params.id);
    res.status(200).send(placement);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const placement = await Placement.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).send(placement);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Placement.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Placement deleted" });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
