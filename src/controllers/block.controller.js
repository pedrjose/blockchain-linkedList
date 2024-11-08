import { createBlockService } from "../services/block.service.js";

export async function createBlockController(req, res) {
  const { value, fromWallet, toWallet } = req.body;

  try {
    const create = await createBlockService(value, fromWallet, toWallet);

    res.status(201).send(create);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
