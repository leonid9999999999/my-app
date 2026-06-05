import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });

import db from "./config/dbConnect.js";
import express from "express";
import bookingRoutes from "./routes/bookingRoute.js";
import mailingRoute from "./routes/mailingRoute.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect DB
(async () => {
    await db.connect(process.env.ATLAS_URI);
})();

// Routes
app.use("/api", bookingRoutes);
app.use("/api", mailingRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
