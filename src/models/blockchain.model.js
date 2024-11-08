import { BlockchainNode } from "./block.model.js";
import { mineBlock } from "../helpers/blockchain.helper.js";

export function Blockchain(block) {
  this.block = block;
}

Blockchain.prototype.validateAndAddBlockToChain = function (block) {
  let currentBlock = this.block;
  let previousBlock;

  const newBlock = new BlockchainNode({
    fromWallet: block.transaction.fromWallet,
    toWallet: block.transaction.toWallet,
    value: block.transaction.value,
    createdAt: block.transaction.createdAt,
  });

  if (!this.block) {
    newBlock.prevHash = 0;

    newBlock.hash = mineBlock(newBlock);

    this.block = newBlock;
  } else if (!this.block.next) {
    newBlock.prevHash = this.block.hash;

    newBlock.hash = mineBlock(newBlock);

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
        throw new Error({
          message: `DAMAGED BLOCKCHAIN: block number ${blockIndex} has invalid hash.`,
        });
      }

      previousBlock = currentBlock;
      currentBlock = currentBlock.next;
      blockIndex++;
    }

    newBlock.prevHash = previousBlock.hash;

    newBlock.hash = mineBlock(newBlock);

    previousBlock.next = newBlock;
  }
};
