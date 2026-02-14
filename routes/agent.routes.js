import express from "express";
import Agent from "../models/Agent.js";
import { encrypt } from "../config/encryption.js";
import auth from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create", auth, async (req, res) => {
  const encToken = encrypt(req.body.apiToken);

  const agent = await Agent.create({
    owner: req.user.id,
    name: req.body.name,
    gender: req.body.gender,
    apiProvider: req.body.apiProvider,
    modelName: req.body.modelName,
    apiToken: encToken
  });

  res.json({ success: true, agentId: agent._id });
});

export default router;
