import "dotenv/config";
import cors from "cors";
import express from "express";
import * as routes from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3001;

const corsConfig = {
origin: "http://localhost:3000",
};

app.use(cors(corsConfig));

app.use("/accounts", routes.accounts);
app.use("/categories", routes.categories);
app.use("/payee", routes.payee);
app.use("/transactions", routes.transactions);
app.use("/users", routes.users);

app.use("/test",(req,res) => {
res.json({message:"hello"})
})

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
