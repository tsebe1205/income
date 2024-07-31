import bodyParser from "body-parser";
import express from "express";
import fs from "node:fs";
import cors from "cors";
import { db } from "./db.js";

const app = express();

const port = 8000;

app.use(bodyParser.json());
app.use(cors());

// app.post("/",  (req, res) => {
//    data.push(req.body);
//    res.send("zas");
// })

app.get("/", async (req, res) => {
  const tableQueryText = `
    CREATE TABLE IF NOT EXISTS "users" (
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE
    

    )`;
  try {
    await db.query(tableQueryText);
  } catch (error) {
    console.error(error);
  }
  res.send("Table Created");
});

app.get("/createUser", async (req, res) => {
  const QueryText = `
    INSERT INTO users (name, email)
    VALUES ('tsebe', '24LP8296@nest.edu.mn');
    `;
  try {
    await db.query(QueryText);
  } catch (error) {
    console.error(error);
  }
  res.send("User Inserted");
});

// app.get("/getUser", async (req, res) => {
//     const QueryText = `
//     SELECT *FROM users
//       `;
//     try {
//      const result= await db.query(QueryText);
//     } catch (error) {
//       console.error(error);
//     }
//     res.send(result.rows);
//   });
app.listen(port, () => {
  console.log("EE");
});
