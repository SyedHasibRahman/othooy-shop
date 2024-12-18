

const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')
const router = require('./routes')
const { corsOptions } = require('./utils/corsOptions')
require('dotenv').config()

const app = express()

app.use(express.json());
app.use(cookieParser())

// CORS configuration for multiple domains
app.use(cors(corsOptions));

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
