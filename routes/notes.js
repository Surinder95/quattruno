var express = require("express");
var router = express.Router();
var Note = require("../models/note");
var middleware = require("../middleware");


//INDEX - show all campgrounds
router.get("/", function (req, res) {
    // Get all campgrounds from DB   
    //:::: It should be under book so it might be /books :::::::
    Note.find({}, function (err, notes) {
        if (err) {
            console.log(err);
        } else {
            //res.render("books/index",{books:allBooks});
            //res.send("This is book index page");
            res.json(notes);
        }
    });
});

//CREATE - add new book to DB
// router.post("/", middleware.isLoggedIn, function(req, res){
router.post("/", function (req, res) {
    // get data from form and add to books array
    let title = req.body.title;
    var course = req.body.course;
    var image = req.body.image;
    var teacher = req.body.teacher;
    var desc = req.body.description;
    var created = req.body.created;
    console.log(title);
    // var author = {
    //     id: req.user._id,
    //     username: req.user.username
    // }

    // var newBook = {name: name, image: image, price: price, description: desc, author:author}
    var newNote = {
        title: title,
        course: course,
        image: image,
        teacher: teacher,
        description: desc,
        created: created
    }
    // Create a new campground and save to DB
    Note.create(newNote, function (err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            //redirect back to campgrounds page
            console.log(newlyCreated);
            res.redirect("/notes");
        }
    });
});

//NEW - show form to create new campground
router.get("/new", middleware.isLoggedIn, function (req, res) {
    res.render("notes/new");
});

// SHOW - shows more info about one campground
router.get("/:id", function (req, res) {
    //find the campground with provided ID
    Note.findById(req.params.id).populate("comments").exec(function (err, foundNote) {
        if (err) {
            console.log(err);
        } else {
            console.log(foundNote)
            //render show template with that campground
            res.render("notes/show", { note: foundNote });
        }
    });
});

// EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkNoteOwnership, function (req, res) {
    Note.findById(req.params.id, function (err, foundNote) {
        res.render("notes/edit", { note: foundNote });
    });
});

// UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkNoteOwnership, function (req, res) {
    // find and update the correct campground
    Note.findByIdAndUpdate(req.params.id, req.body.book, function (err, updatedNote) {
        if (err) {
            res.redirect("/notes");
        } else {
            //redirect somewhere(show page)
            res.redirect("/notes/" + req.params.id);
        }
    });
});

// DESTROY CAMPGROUND ROUTE
router.delete("/:id", middleware.checkNoteOwnership, function (req, res) {
    Note.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.redirect("/notes");
        } else {
            res.redirect("/notes");
        }
    });
});


module.exports = router;