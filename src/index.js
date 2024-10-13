import express from "express";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

import { formatDate } from "./helpers.js";
import { Blockchain } from "./Blockchain.js";

let blockchain = new Blockchain(null);

app.post("/blockchain/add-block", async (req, res) => {
  try {
    const { value, fromWallet, toWallet } = req.body;

    if (!value || !fromWallet || !toWallet) {
      throw new Error(
        "UNAUTHORIZED TRANSACTION: empty essential fields of requisition!"
      );
    }

    let block = {
      fromWallet: fromWallet,
      toWallet: toWallet,
      value: parseInt(value),
      createdAtDate: null,
      hash: null,
      prevHash: null,
    };

    block.createdAtDate = formatDate();
    blockchain.addBlock(block);

    res.send(blockchain);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.listen(port, () =>
  console.log(`\n\nBLOCKCHAIN NETWORK IS RUNNING ON ${port} PORT!`)
);
