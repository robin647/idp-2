const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Signup Route
router.post('/signup', async (req, res) => {
  const { name, phone, email, studentId, password } = req.body;

  const existingUser = await User.findOne({ studentId });
  if (existingUser) return res.status(400).json({ message: 'Student ID already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name, phone, email, studentId, password: hashedPassword
  });

  await newUser.save();
  res.json({ message: 'Signup successful' });
});

// Login Route
router.post('/login', async (req, res) => {
  const { studentId, password } = req.body;

  const user = await User.findOne({ studentId });
  if (!user) return res.status(400).json({ message: 'Student ID not found' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Incorrect password' });

  const token = jwt.sign({ id: user._id }, 'secretKey', { expiresIn: '1h' });
  res.json({ message: 'Login successful', token });
});

module.exports = router;
