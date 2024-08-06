import bodyParser from "body-parser";
import express from "express";
import fs from "node:fs";
import cors from "cors";
import { db } from "./db.js";
import { isError } from "node:util";
import { user } from "./src/router/user.js";
import { record } from "./src/router/record.js";
import {category} from "./src/router/category.js"



const app = express();

const port = 8000;

app.use(bodyParser.json());

app.use(cors());
app.use("/user",user );
app.use("/record", record);
app.use("/category", category);


app.get("/user", async (req, res) => {
  const TableQueryText = `CREATE TABLE "user" (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      email VARCHAR(50) UNIQUE NOT NULL,
      name VARCHAR(255) NOT NULL,
      password TEXT,
      avatar_img TEXT,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAte TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      currency_type currency_type DEFAULT 'USD' NOT NULL
    )`;
  try {
    await db.query(TableQueryText);
  } catch (error) {
    console.error(error);
  }
  res.send("TABLE DONE");
});


app.get("/record", async (req, res) => {
  const TabledQueryText = `CREATE TABLE "record" (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      user_id TEXT,
      name TEXT NOT NULL,
      amount REAL NOT NULL,
      transaction_type transaction_type DEFAULT 'EXP' NOT NULL,
      description TEXT,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      category_id TEXT
    )`;
  try {
    await db.query(TabledQueryText);
  } catch (error) {
    console.error(error);
  }
  res.send("RECORD DONE");
});


app.get("/category", async (req, res) => {
  const TableQueryText = `CREATE TABLE "category" (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100),
    description TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category_image TEXT
    )`;

  try {
    await db.query(TableQueryText);
  } catch (error) {
    console.error(error);
  }
  res.send("CATECORY DONE");
});


app.listen(port, () => {
  console.log("EE");
});

