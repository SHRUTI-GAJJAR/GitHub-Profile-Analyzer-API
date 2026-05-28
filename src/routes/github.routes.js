const express = require("express");
const router = express.Router();

const {
  analyzeUser,
  getAllProfiles,
  getProfile,
} = require("../controllers/github.controller");

/**
 * @swagger
 * /api/analyze/{username}:
 *   post:
 *     summary: Analyze GitHub profile
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User analyzed successfully
 */
router.post("/analyze/:username", analyzeUser);

/**
 * @swagger
 * /api/profiles:
 *   get:
 *     summary: Get all analyzed profiles
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/profiles", getAllProfiles);

/**
 * @swagger
 * /api/profiles/{username}:
 *   get:
 *     summary: Get single analyzed profile
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/profiles/:username", getProfile);

module.exports = router;