import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

import agentRoutes from "./routes/agent.routes.js";
app.use("/agent", agentRoutes);

app.listen(3000, () => console.log("🚀 Server running"));
