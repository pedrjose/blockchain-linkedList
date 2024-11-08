import { blockchain } from "../index.js";
import {
  validateBlockRepository,
  deleteCacheBlock,
} from "../repository/mine.repository.js";

export async function validateBlockService() {
  console.log("services");

  const getBlocks = await validateBlockRepository();

  if (!getBlocks) return { message: "There are no blocks to be validated!" };

  const block = getBlocks[Math.floor(Math.random() * getBlocks.length)];

  blockchain.validateAndAddBlockToChain(block);

  await deleteCacheBlock(block._id);

  return blockchain;
}
