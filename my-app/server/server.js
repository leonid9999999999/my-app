
const db = require('./config/dbConnect'); 

const express = require("express");
const bookingRoutes = require("./routes/bookingRoute.js")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

(async () => {
    await db.connect(process.env.ATLAS_URI);
})();

const PORT = process.env.PORT || 8080;

app.use('/api', bookingRoutes)

app.listen(PORT, () => console.log("Server started"))


