const bcrypt = require('bcryptjs')
const userModel = require('../../models/userModel')
const jwt = require('jsonwebtoken');

async function userSignInController(req, res) {
    try {
        const { email, password } = req.body;

        if (!email) {
            throw new Error("Please provide email");
        }
        if (!password) {
            throw new Error("Please provide password");
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            throw new Error("User not found");
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if (checkPassword) {
            const tokenData = {
                _id: user._id,
                email: user.email,
            };

            const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: '1y' });

            const tokenOption = {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production", // Secure in production
                sameSite: "None", // Enables cross-origin cookies
                domain: ".othooy.com", // If using subdomains
            };

            // Set the token cookie
            res.cookie("token", token, tokenOption)
                .status(200)
                .json({
                    message: "Login successfully",
                    data: token,
                    success: true,
                    error: false,
                });

        } else {
            throw new Error("Invalid password");
        }
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}

module.exports = userSignInController