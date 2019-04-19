const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const books = require('./routes/api/books');

const app = express();

//Use Routes
app.use('/api/books', books);

const port = process.env.PORT || 5000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));


app.listen(port, () => {
    console.log("Server is running on port: " + port)
})


    //place port here?