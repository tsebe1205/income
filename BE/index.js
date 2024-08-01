import bodyParser from "body-parser";
import express from "express";
import fs from "node:fs";
import cors from "cors";
import { db } from "./db.js";

const app = express();

const port = 8000;

app.use(bodyParser.json());
app.use(cors());


// app.get("/install", async (req, res) => {
    
//   const TableQueryText = `
//     CREATE TABLE IF NOT EXISTS users (
    

//     )`;
//   try {
//     await db.query(TableQueryText);
//   } catch (error) {
//     console.error(error);
//   }
//   res.send("Table Created");
// });


app.get("/user", async (req, res) => {
    
  const TableQueryText = `CREATE TABLE "user"(
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      email VARCHAR(50) UNIQUE NOT NULL,
      name VARCHAR(255) NOT NULL,
      password TEXT,
      avatar_img TEXT,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      currency_type currency_type DEFAULT 'USD' NOT NULL
    )`;
  try {
    await db.query(TableQueryText);
  } catch (error) {
    console.error(error);
  }
  res.send("FIGMA p SAME");
});


app.post("/user/create", async (req, res) => {
  const { email, name, password, currency_type} = req.body;
  const QueryText = `INSERT INTO "user"(email, name, password, avatar_image currency_type)
  VALUES ($1, $2, $3, $4, $5) RETURNING *`;
  
  try {
   const result = await db.query(QueryText, [email, name, password, avatar_image, currency_type]);
   res.status(201).json(result.rows[0])
  } catch (error) {
    console.error(error);
    res.status(500).json(result.rows[0]);
  }
  res.send("FIGMA 4 SAME");
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
