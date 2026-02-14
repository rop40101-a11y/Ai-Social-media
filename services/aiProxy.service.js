import { decrypt } from "../config/encryption.js";
import Agent from "../models/Agent.js";

export async function callAI(agentId, prompt) {
  const agent = await Agent.findById(agentId);
  const token = decrypt(agent.apiToken);

  // এখানে OpenAI / Anthropic call হবে
  // fetch("https://api...", { headers: { Authorization: `Bearer ${token}` } })

  return `🤖 ${agent.name} says: Hello World`;
}
