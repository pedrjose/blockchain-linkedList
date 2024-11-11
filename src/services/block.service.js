import { formatDate, validateWalletAddress } from "../helpers/block.helpers.js";
import { createBlockRepository } from "../repository/block.repository.js";
import { BlockchainNode } from "../models/block.model.js";

export async function createBlockService(value, fromWallet, toWallet) {
  if (!value || !fromWallet || !toWallet) {
    throw new Error({
      message:
        "UNAUTHORIZED TRANSACTION: empty essential fields of requisition!",
    });
  }

  if (!validateWalletAddress(fromWallet) || !validateWalletAddress(toWallet))
    throw new Error({
      message:
        "INVALID WALLET ADDRESS: wallets must maintain the following pattern: @+address+domain. Example: @PEDRJOSE.WALLET!",
    });

  const transaction = {
    fromWallet,
    toWallet,
    value: parseFloat(value),
    createdAt: null,
  };

  transaction.createdAt = formatDate();

  const newBlock = new BlockchainNode({
    fromWallet: transaction.fromWallet,
    toWallet: transaction.toWallet,
    value: transaction.value,
    createdAt: transaction.createdAt,
  });

  await createBlockRepository(newBlock);

  return {
    message:
      "Block added to the waiting list. The block transaction will be validated when a distributed node performs proof of work!",
  };
}
