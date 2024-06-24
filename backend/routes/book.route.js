import express from "express";

import Book from "../model/book.model.js"; // Corrected import path

const router = express.Router();

// Route to get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json(books);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
