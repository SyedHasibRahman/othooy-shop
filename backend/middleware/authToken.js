const jwt = require('jsonwebtoken')

async function authToken(req, res, next) {
    try {
        const token = req.cookies?.token || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdhNTc2MzJiNzI3NTM4NjEwYjg1NjYiLCJlbWFpbCI6InN5ZWRoYXNpYjAxQGdtYWlsLmNvbSIsImlhdCI6MTczNDUxMzE4NCwiZXhwIjoxNzY2MDQ5MTg0fQ.pDIvshPpQoZ5W1daR5oc_bVw1X1eQxDXbNdD5b7u8FM"

        console.log("token", token)
        if (!token) {
            return res.status(200).json({
                message: "Please Login...!",
                error: true,
                success: false
            })
        }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (err, decoded) {
            console.log(err)
            console.log("decoded", decoded)

            if (err) {
                console.log("error auth", err)
            }

            req.userId = decoded?._id

            next()
        });


    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            data: [],
            error: true,
            success: false
        })
    }
}


module.exports = authToken