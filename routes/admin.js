const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { adminAuth } = require("../middleware/auth");
const User = require("../models/User");
const Voter = require("../models/Voter");
const VoterVerificationService = require("../services/voterVerification");

router.post("/create-staff", adminAuth, async (req, res) => {
  try {
    const { userId, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      userId,
      password: hashedPassword,
      role: "staff",
    });

    await user.save();
    res.status(201).json({ message: "Staff member created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating staff member" });
  }
});

router.get("/staff-list", adminAuth, async (req, res) => {
  try {
    const staffMembers = await User.find({ role: "staff" }).select("-password");
    res.json(staffMembers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching staff list" });
  }
});

router.post("/add-voter", adminAuth, async (req, res) => {
  try {
    const { voterId, pollingBoothId, name, biometricHash } = req.body;
    const voter = new Voter({
      voterId,
      pollingBoothId,
      name,
      biometricHash,
    });
    await voter.save();
    res.status(201).json({ message: "Voter added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding voter" });
  }
});

router.post("/verify-voters/:boothId", adminAuth, async (req, res) => {
  try {
    const result = await VoterVerificationService.verifyVoterList(
      req.params.boothId
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Error during verification" });
  }
});

module.exports = router;
