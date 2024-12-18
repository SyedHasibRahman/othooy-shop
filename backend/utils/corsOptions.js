const { allowedOrigins } = require("./allowedOrigins");





module.exports.corsOptions = {
    origin: (origin, callback) => {
        // console.log('origin', origin);
        // should avoid those  origin === 'null' || origin === undefined
        if (allowedOrigins.indexOf(origin) !== -1 || !origin || origin === 'null') {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }

        // console.log(allowedOrigins)
    },
    credentials: true,
    optionsSuccessStatus: 200,
    methods: 'GET, POST, PUT, DELETE', // Add your allowed HTTP methods
    allowedHeaders: 'Content-Type, Authorization', // Add your allowed headers
}
