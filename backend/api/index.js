import express, { response } from "express";
import { PORT, mongoDBURL } from "../config.js";
import mongoose from "mongoose";
import { Job } from "../models/jobModel.js";
import jobRoutes from "../routes/jobRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to MERN Stack Tutorial");
});

app.use("/api/jobs", jobRoutes);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("MongoDB is connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
