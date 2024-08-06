import { db } from "../../db.js";


export const getRecord = async (req, res) => {
  const QueryText = `SELECT * FROM "record"`;
  try {
    const result = await db.query(QueryText);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "ALDAAget" });
  }
};

export const createRecord =async (req, res) => {
    const { user_id, name, amount, description, category_id } = req.body;
    const QueryText = `
    INSERT INTO  "record" ( user_id, name, amount, description, category_id)
    VALUES ($1, $2, $3, $4, $5) RETURNING *`;
  
    try {
      const result = await db.query(QueryText, [
        user_id,
        name,
        amount,
        description,
        category_id,
      ]);
    } catch (error) {
      console.error(error);
    }
    res.send("catecory");
  }



 export const deleteRecord = async (req, res) => {
    const { id } = req.params;
   console.log(id)
    try {
      const result = await db.query(`DELETE FROM "record" WHERE id = $1`, [id] );
      res.send("delete")
   
  
    } catch (error) {
      console.error(error);
    }
    res.status(500).json({ error: "ALDAA" });
  };

   export const updateRecord= async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
      const result = await db.query(
        `UPDATE "record" SET name = $1, amount = $2 WHERE id = $3 RETURNING *`,
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