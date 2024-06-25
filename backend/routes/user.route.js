import express from "express";
import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({
      message: "User created successfully",
      id: newUser._id,
      email: newUser.email,
      password: newUser.password,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    } else {
      res.json({
        message: "Logged in successfully",
        user: {
          id: user._id,
          email: user.email,
          password: user.password,
        },
      });
    }
  } catch (error) {}
});
