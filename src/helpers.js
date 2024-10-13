import crypto from "crypto";

export function generateHash(
  fromWallet,
  toWallet,
  value,
  createdAtDate,
  prevHash
) {
  const data = `${prevHash}${fromWallet}${value}${toWallet}${createdAtDate}`;
  return crypto.createHash("sha256").update(data).digest("hex");
}

export function validateHash(
  fromWallet,
  toWallet,
  value,
  createdAtDate,
  prevHash,
  hash
) {
  const generatedHash = generateHash(
    fromWallet,
    toWallet,
    value,
    createdAtDate,
    prevHash
  );
  return generatedHash === hash;
}

export function formatDate() {
  let date = new Date();

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}
