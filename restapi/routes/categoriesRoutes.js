import { Router, json } from 'express';
// import db from '../config/index.js';

const categories = new Router();
categories.use(json());

// catergories.get("/", async (req, res) => {
//     try {
//       const result = await db("catergories").select();
//       res.json(result);
//     } catch (err) {
//       errorHandler(err, res);
//     }
//   });

export default categories;
