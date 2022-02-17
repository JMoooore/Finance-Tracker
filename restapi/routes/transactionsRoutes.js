import { Router, json } from "express";
import db from "../config/index.js";

const transactions = new Router();
transactions.use(json());

// transactions.get("/", async (req, res) => {
//     try {
//       const result = await db("transactions").select();
//       res.json(result);
//     } catch (err) {
//       errorHandler(err, res);
//     }
//   });


export default transactions;