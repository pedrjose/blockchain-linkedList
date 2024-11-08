import mongoose from "mongoose";

const BlockSchema = new mongoose.Schema({
  transaction: {
    type: Object,
    require: true,
  },
  prevHash: {
    type: String,
    require: true,
  },
  nonce: {
    type: String,
    require: true,
  },
  hash: {
    type: String,
    require: true,
  },
  next: {
    type: Object,
    require: true,
  },
});

const Block = mongoose.model("Block", BlockSchema);

export default Block;
