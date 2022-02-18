import { Router, json } from 'express';
import db from '../config/index.js';

const accounts = new Router();
accounts.use(json());

// accounts.get("/", async (req, res) => {
//     try {
//       const result = await db("accounts").select();
//       res.json(result);
//     } catch (err) {
//       errorHandler(err, res);
//     }
//   });

export default accounts;
