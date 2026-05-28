const express = require("express");
const router = express.Router();

const {
  analyzeUser,
  getAllProfiles,
  getProfile,
} = require("../controllers/github.controller");

router.post("/analyze/:username", analyzeUser);
router.get("/profiles", getAllProfiles);
router.get("/profiles/:username", getProfile);

module.exports = router;