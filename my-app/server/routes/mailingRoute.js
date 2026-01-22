import express from "express";
import createMail from "../controllers/mailingController.js";

const router = express.Router();

router.post("/sendMail", createMail);

export default router;
