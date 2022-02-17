import { Router, json } from "express";
import db from "../config/index.js";

const payee = new Router();
payee.use(json());

// payee.get("/", async (req, res) => {
//     try {
//       const result = await db("payee").select();
//       res.json(result);
//     } catch (err) {
//       errorHandler(err, res);
//     }
//   });


export default payee;