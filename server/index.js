import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts";

const app = express();

app.use(bodyParser.json({ limit: "10mb", extended: trueZ }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: trueZ }));

app.use(cors());

app.use("/posts", postRoutes);

const MONGO_CONNECTION_STRING =
  "mongodb+srv://hieunguyenduc696:ETCXZilLjISIUi3E@cluster0.62j5uij.mongodb.net/?retryWrites=true&w=majority";
const port = process.env.port || 5000;
mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() =>
    app.listen(port, () => console.log(`Server is running on port ${port}`))
  )
  .catch((error) => console.log(error));
