const express = require('express');
const router = express.Router();

//Book Model 
const Book = require('../../models/Book');

router.get('/', (req, res) => {
    Book.find()
        .sort({ date: -1 })
        .then(books =>  res.json(books))
});

router.post('/', (req, res) => {
    const newBook = new Book({
        
        title: req.title,
        course: req.course,
        description: req.description,
        price: req.price,
        date: req.date
    });    

    newBook.save()
        .then(book => res.json(book));
});

module.exports = router;