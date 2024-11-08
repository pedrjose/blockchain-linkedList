import crypto from "crypto";

export function generateHash(
  fromWallet,
  toWallet,
  value,
  createdAtDate,
  prevHash,
  hash
) {
  const data = `${fromWallet}${toWallet}${value}${createdAtDate}${prevHash}${hash}`;
  return crypto.createHash("sha256").update(data).digest("hex");
}

export function mineBlock(block) {
  block.nonce = 0;

  while (true) {
    console.log(block.hash);
    block.hash = generateHash(
      block.fromWallet,
      block.toWallet,
      block.value,
      block.createdAt,
      block.prevHash,
      block.hash
    );

    if (block.hash.startsWith("0".repeat(2))) {
      return block.hash;
    }

    block.nonce += 1;
  }
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
