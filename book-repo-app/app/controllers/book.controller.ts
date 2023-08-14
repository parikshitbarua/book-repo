// @ts-nocheck
import {db} from "../models";
import {Request, Response} from "express";

const Book = db.books;

// Retrieve all Books from the database.
export const findAllBooks = (req : Request, res : Response) => {
    Book.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving book."
            });
        });
};

// Find a single Book with an id
export const findOneBook = (req : Request, res : Response) => {
    const id = req.params.id;

    Book.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Book with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Book with id=" + id
            });
        });
};

// Create and Save a new Tutorial
export const createBook = (req : Request, res : Response) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Author or book's title can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const book = {
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear ? req.body.publishedYear : "NA"
    };

    try {
        // const isYear = validateYear(publishedYear);
        //
        // if (!isYear) {
        //     res.status(500).send({
        //         message: "Please enter a valid year between 1000 and 9999"
        //     });
        // }
        // Save Book in the database
        Book.create(book)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Book."
                });
            });
    } catch {

    }

};

// Update a book
export const updateBook = (req : Request, res : Response) => {
    const id = req.params.id;
    console.log(req.body);
    Book.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Book was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Book with id=${id}. Maybe Book was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Book with id=" + id
            });
        });
};

// Delete a Book with the specified id in the request
export const deleteBook = (req : Request, res : Response) => {
    const id = req.params.id;

    Book.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Book was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Book with id=${id}. Maybe Book was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Book with id=" + id
            });
        });
};
