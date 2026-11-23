import dns from "node:dns";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import contactRoutes from "./routes/ContactRoutes.js";

dns.setServers(["8.8.8.8", "1.1.1.1"]);
dns.setDefaultResultOrder("ipv4first");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// GET routes — UptimeRobot / browser check ke liye
// Is ke baghair har GET par "Cannot GET" aata tha, kyun ke sirf POST /api/contact tha.
app.get("/", (req, res) => res.json({ message: "Backend is running" }));
app.get("/api/health", (req, res) => res.json({ ok: true, app: "contact-backend" }));

app.use("/api/contact", contactRoutes);

// Connect MongoDB
connectDB();

// Start Server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
