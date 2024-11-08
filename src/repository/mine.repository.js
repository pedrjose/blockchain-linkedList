import Block from "../schema/Block.js";

export const validateBlockRepository = () => Block.find();

export const deleteCacheBlock = (id) => Block.findByIdAndDelete(id);
