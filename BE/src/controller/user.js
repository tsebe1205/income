import { db } from "../../db.js";

export const createUser =async (req, res) => {
    const { email, name, password, avatar_img, currency_type } = req.body;
    const QueryText = `
    INSERT INTO  "user" ( email, name, password, avatar_img, currency_type)
    VALUES ($1, $2, $3, $4, $5) RETURNING *`;
  
    try {
      const result = await db.query(QueryText, [
        email,
        name,
        password,
        avatar_img,
        currency_type,
      ]);
    } catch (error) {
      console.error(error);
    }
    res.send("FIGMA 5 SAME");
  }

export const getUser = async (req, res) => {
    const QueryText = "SELECT * FROM user";
    try {
      const result = await db.query(QueryText);
      res.status(201).json(result.rows[0]);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Database error" });
    }
  };

 export const deleteUser = async (req, res) => {
    const { id } = req.params;
   console.log(id)
    try {
      const result = await db.query(`DELETE FROM "user" WHERE id = $1`, [id] );
      res.send("delete")
   
  
    } catch (error) {
      console.error(error);
    }
    res.status(500).json({ error: "Database error" });
  };

   export const updateUser= async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
      const result = await db.query(
        `UPDATE "user" SET name = $1, email = $2 WHERE id = $3 RETURNING *`,
        [name, email, id]
      );
   
  if (result.rows.length === 0) {
        res.status(404).json({ error: "Item not found" });
      } else {
        res.status(201).json(result.rows[0]);
      }
   
  
    } catch (error) {
      console.error(error);
    }
    res.send("FIGMA up SAME");
  }