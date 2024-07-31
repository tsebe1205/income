import bodyParser from "body-parser";
import express from "express"
import fs from "node:fs"

const app = express();

const port = 8000;

const data = [];

app.use(bodyParser.json());

app.post("/addData",  (req, res) => {
    console.log(req.body, "req");
   data.push(req.body);
   res.send("za");
})

app.get("/getData",  (req, res)=> {
    res.send(data);
  });
  app.listen(port,()=>{
    console.log("EE")
  })

