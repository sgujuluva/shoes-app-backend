import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/RegisterRoutes.js"

dotenv.config();

const app = express();

app.use(express.json());

//connecting to the database
mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`)
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("🤨");
  });

//registering routes
app.use("/api/users", userRoutes)

app.listen(process.env.PORT || 6050, () => {
    console.log(`Server is running on PORT `)
})