import express from "express";
import { createContact } from "../controllers/ContactController.js";

const router = express.Router();

// POST API
router.post("/", createContact);

export default router;