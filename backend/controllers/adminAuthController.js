import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { email, password } = req.body;
  const adminExists = await Admin.findOne({ email });
  if (adminExists) return res.status(400).json({ msg: "Admin exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const admin = await Admin.create({ email, password: hashedPassword });

  res.status(201).json({ msg: "Admin registered" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  if (!admin || !(await bcrypt.compare(password, admin.password)))
    return res.status(400).json({ msg: "Invalid credentials" });

  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.json({ token });
};

export const logout = (req, res) => {
  res
    .status(200)
    .json({ msg: "Logged out (handled client-side by removing token)" });
};
