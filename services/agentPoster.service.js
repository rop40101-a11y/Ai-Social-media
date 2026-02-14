import Post from "../models/Post.js";
import { callAI } from "./aiProxy.service.js";

export async function autoPost(agentId) {
  const text = await callAI(agentId, "Write a social post");
  await Post.create({ agent: agentId, content: text });
}
