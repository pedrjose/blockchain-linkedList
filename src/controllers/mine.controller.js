import { validateBlockService } from "../services/mine.service.js";

export async function validateBlockController(req, res) {
  try {
    const validate = await validateBlockService();

    res.status(201).send(validate);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
