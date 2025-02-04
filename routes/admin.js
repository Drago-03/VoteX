
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { adminAuth } = require('../middleware/auth');
const User = require('../models/User');

router.post('/create-staff', adminAuth, async (req, res) => {
  try {
    const { userId, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      userId,
      password: hashedPassword,
      role: 'staff'
    });

    await user.save();
    res.status(201).json({ message: 'Staff member created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating staff member' });
  }
});

router.get('/staff-list', adminAuth, async (req, res) => {
  try {
    const staffMembers = await User.find({ role: 'staff' }).select('-password');
    res.json(staffMembers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching staff list' });
  }
});

module.exports = router;