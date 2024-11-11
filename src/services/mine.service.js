import { blockchain } from "../index.js";
import {
  validateBlockRepository,
  deleteCacheBlock,
} from "../repository/mine.repository.js";

export async function validateBlockService() {
  const getBlocks = await validateBlockRepository();

  if (getBlocks.length === 0)
    return { message: "There are no blocks to be validated!" };

  const block = getBlocks[Math.floor(Math.random() * getBlocks.length)];

  blockchain.validateAndAddBlockToChain(block);

  await deleteCacheBlock(block._id);

  return blockchain;
}
