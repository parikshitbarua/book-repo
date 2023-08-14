import express from "express";
import { createBook, updateBook, findOneBook, findAllBooks, deleteBook } from '../controllers/book.controller';

export const router = express.Router();

router.route("/books").get(findAllBooks);
router.route("/books/:id").get(findOneBook);
router.route("/books").post(createBook);
router.route("/books/:id").put(updateBook);
router.route("/books/:id").delete(deleteBook);



