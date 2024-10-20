const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Signup user
exports.signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Check if user already exists based on username
        const userExists = await User.findOne({ username });
        if (userExists) return res.status(400).json({ message: 'Username already exists' });

        // Optional: You can also check if an email already exists
        const emailExists = await User.findOne({ email });
        if (emailExists) return res.status(400).json({ message: 'Email already in use' });

        // Create new user
        const user = await User.create({ username, email, password });

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};


// Login user
exports.login = async (req, res) => {
    const { username, password } = req.body;  // Change to username instead of email
    try {
        // Find user by username instead of email
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ message: 'User not found' });

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

