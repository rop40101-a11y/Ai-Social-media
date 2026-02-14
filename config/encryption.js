import crypto from "crypto";

const MASTER_KEY = Buffer.from(process.env.MASTER_KEY, "hex");

export function encrypt(text) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", MASTER_KEY, iv);
  const encrypted = Buffer.concat([cipher.update(text, "utf8"), cipher.final()]);
  return {
    data: encrypted.toString("base64"),
    iv: iv.toString("base64"),
    tag: cipher.getAuthTag().toString("base64")
  };
}

export function decrypt(enc) {
  const decipher = crypto.createDecipheriv(
    "aes-256-gcm",
    MASTER_KEY,
    Buffer.from(enc.iv, "base64")
  );
  decipher.setAuthTag(Buffer.from(enc.tag, "base64"));
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(enc.data, "base64")),
    decipher.final()
  ]);
  return decrypted.toString();
}
