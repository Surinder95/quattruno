const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const Schema = mongoose.Schema;

//create schema
const BookSchema = new Schema({
    title: {
        type: String,
        default: "No Name"
    },
    course: {
        type: String
        //,required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number
        //,required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
/*
const Book1 = mongoose.model('Book1', BookSchema);

async function saveBook() {
    const book1 = new Book1({
        title: "intro to java programming",
        course: "math 20",
        description: "slightly used",
        price: 50,
        date: Date.now()
    });

    try {
        const result = await book1.save();
        console.log(result);
    } catch (err) {
        console.log(err.message)
    }

    const result = await book1.save();
    console.log(result);
}
*/
//saveBook();
module.exports = Book = mongoose.model('book1', BookSchema);