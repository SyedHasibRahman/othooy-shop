

const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')
const router = require('./routes')
require('dotenv').config()

const app = express()

// List of allowed domains
const allowedDomains = [
    'https://shop.othooy.com',
    'https://othooy.com',
    process.env.FRONTEND_URL // Add environment variable if needed
];

app.use(express.json());
app.use(cookieParser())

// CORS configuration for multiple domains
app.use(cors({
    origin: function (origin, callback) {
        if (!origin) {
            // Allow requests like Postman without origin
            return callback(null, true);
        }
        if (allowedDomains.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

app.use('/api', router)

const PORT = process.env.PORT || 8080;

connectDB()

app.listen(PORT, () => {
    console.log('Connected to DB');
    console.log("Server is running on port " + PORT);
});

app.get('/', (req, res) => {
    res.send('Hello Brand New E-Commerce Server');
});
