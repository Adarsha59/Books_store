// index.js

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import booksRouter from "./routes/book.route.js"; // Corrected import statement
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const URI = process.env.MongoDbURI;

async function connectToDatabase() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
}

connectToDatabase();

// Middleware to parse JSON request body
app.use(express.json());

// Use the books router
app.use("/books", booksRouter); // Corrected variable name to booksRouter

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
