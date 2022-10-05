import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/RegisterRoutes.js";
import orderRoutes from "./routes/OrderRoutes.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express());

//connecting to the database
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`
  )
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("🤨");
  });

//registering routes
app.use("/users", userRoutes);
app.use("/orders", orderRoutes);

app.listen(process.env.PORT || 6050, () => {
  console.log(`Server is running on PORT `);
});
