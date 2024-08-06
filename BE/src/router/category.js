import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategory,
  updateCategory,
} from "../controller/category.js";

const category = express.Router();
category
  .get("/", getCategory)
  .post("/create", createCategory)
  .put("/:id", updateCategory)
  .delete("/:id", deleteCategory);

export { category };
