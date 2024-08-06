import express from "express";
import {
  createRecord,
  deleteRecord,
  getRecord,
  updateRecord,
} from "../controller/record.js";

const record = express.Router();
record
  .get("/", getRecord)
  .post("/create", createRecord)
  .put("/:id", updateRecord)
  .delete("/:id", deleteRecord);

export { record };
