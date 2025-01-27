const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Login Controller
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid password."
            });
        }

        const payload = { id: user._id, username: user.username };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            success: true,
            message: "Login successful.",
            token
        });

    } catch (error) {
        console.error("Login Error:", error.message); 
        res.status(500).json({
            success: false,
            message: "An error occurred while logging in."
        });
    }
};

// Register Controller
exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        const user = await User.findOne({ username });
        if (user) {
            return res.status(409).json({
                success: false,
                message: "User already registered."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({
            success: true,
            message: "Registration successful.",
            user: {
                id: newUser._id,
                username: newUser.username
            }
        });

    } catch (error) {
        console.error("Registration Error:", error.message);
        res.status(500).json({
            success: false,
            message: "An error occurred during registration."
        });
    }
};
