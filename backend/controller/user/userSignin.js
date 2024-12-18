const bcrypt = require('bcryptjs')
const userModel = require('../../models/userModel')
const jwt = require('jsonwebtoken');

async function userSignInController(req, res) {
    try {
        const { email, password } = req.body

        if (!email) {
            throw new Error("Please provide email")
        }
        if (!password) {
            throw new Error("Please provide password")
        }

        const user = await userModel.findOne({ email })

        if (!user) {
            throw new Error("User not found")
        }

        const checkPassword = await bcrypt.compare(password, user.password)

        console.log("checkPassoword", checkPassword)

        if (checkPassword) {
            const tokenData = {
                _id: user._id,
                email: user.email,
            }
            const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 31536000 });

            const tokenOption = {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',  // Set to true in production, false in development
                sameSite: 'None',  // Allows cross-origin cookies
                domain: '.othooy.com',  // Set the domain to your main domain or root domain
            }


            res.cookie("token", token, tokenOption).status(200).json({
                message: "Login successfully",
                data: token,
                success: true,
                error: false
            })

        } else {
            throw new Error("Please check Password")
        }







    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }

}

module.exports = userSignInController