import express from "express";

import connectCacheDatabase from "./cache/cache.blockchain.js";

const port = process.env.PORT || 3000;
const app = express();

import { Blockchain } from "./models/blockchain.model.js";

import blockRoute from "./routes/block.routes.js";
import mineRoute from "./routes/mine.route.js";
import blockchainRoute from "./routes/blockchain.route.js";

app.use(express.json());
app.use("/block", blockRoute);
app.use("/mine", mineRoute);
app.use("/blockchain", blockchainRoute);

connectCacheDatabase();

app.listen(port, () =>
  console.log(`\n\nBLOCKCHAIN NETWORK IS RUNNING ON ${port} PORT!`)
);

export const blockchain = new Blockchain();