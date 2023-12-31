import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import emailRouter from "./emailRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(emailRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
