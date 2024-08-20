import express from "express";
import {
  createRecord,
  deleteRecord,
  getRecord,
  updateRecord,
  getBarChartData,
} from "../controller/record.js";

const record = express.Router();
record
  .get("/", getRecord)
  .post("/create", createRecord)
  .post("/barchart", getBarChartData)
  .put("/:id", updateRecord)
  .delete("/:id", deleteRecord);

export { record };
