import { generateHash, validateHash } from "./helpers.js";

export function Blockchain(block) {
  this.block = block;
}

export function BlockchainNode(transaction) {
  this.transaction = transaction;
  this.prevHash = null;
  this.hash = null;
  this.next = null;
}

Blockchain.prototype.addBlock = function (transaction) {
  let currentBlock = this.block;
  let previousBlock;

  const newBlock = new BlockchainNode({
    fromWallet: transaction.fromWallet,
    toWallet: transaction.toWallet,
    value: transaction.value,
    createdAtDate: transaction.createdAtDate,
  });

  if (!this.block) {
    newBlock.prevHash = 0;

    newBlock.hash = generateHash(
      newBlock.transaction.fromWallet,
      newBlock.transaction.toWallet,
      newBlock.transaction.value,
      newBlock.transaction.createdAtDate,
      newBlock.prevHash
    );

    this.block = newBlock;
  } else if (!this.block.next) {
    newBlock.prevHash = this.block.hash;

    newBlock.hash = generateHash(
      newBlock.transaction.fromWallet,
      newBlock.transaction.toWallet,
      newBlock.transaction.value,
      newBlock.transaction.createdAtDate,
      newBlock.prevHash
    );

    this.block.next = newBlock;
  } else {
    previousBlock = this.block;

    let blockIndex = 1;
    while (currentBlock) {
      const isValid = validateHash(
        currentBlock.transaction.fromWallet,
        currentBlock.transaction.toWallet,
        currentBlock.transaction.value,
        currentBlock.transaction.createdAtDate,
        currentBlock.prevHash,
        currentBlock.hash
      );

      if (!isValid) {
        throw new Error(
          `DAMAGED BLOCKCHAIN: block number ${blockIndex} has invalid hash.`
        );
      }

      previousBlock = currentBlock;
      currentBlock = currentBlock.next;
      blockIndex++;
    }

    newBlock.prevHash = previousBlock.hash;

    newBlock.hash = generateHash(
      newBlock.transaction.fromWallet,
      newBlock.transaction.toWallet,
      newBlock.transaction.value,
      newBlock.transaction.createdAtDate,
      newBlock.prevHash
    );

    previousBlock.next = newBlock;
  }
};
