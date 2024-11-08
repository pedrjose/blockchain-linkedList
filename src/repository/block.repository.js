import Block from "../schema/Block.js";

export const createBlockRepository = (block) => Block.create(block);
