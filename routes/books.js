var express =       require("express");
var router =        express.Router();
var Book =          require("../models/book");
var middleware =    require("../middleware");


//INDEX - show all campgrounds
router.get("/", function (req, res) {
    // Get all campgrounds from DB   
    //:::: It should be under book so it might be /books :::::::
    Book.find({}, function (err, books) {
        if (err) {
            console.log(err);
        } else {
            //res.render("books/index",{books:allBooks});
            //res.send("This is book index page");
            res.json(books);
        }
    });
});

//CREATE - add new book to DB
// router.post("/", middleware.isLoggedIn, function(req, res){
router.post("/", function (req, res) {
    // get data from form and add to books array
    let title =     req.body.title;
    var image =     req.body.image;
    var price =     req.body.price;
    var desc =      req.body.description;
    var course =    req.body.course;
    var created =   req.body.created;
    console.log(title);
    // var author = {
    //     id: req.user._id,
    //     username: req.user.username
    // }

    // var newBook = {name: name, image: image, price: price, description: desc, author:author}
    var newBook = { 
        title: title, 
        image: image, 
        price: price, 
        description: desc, 
        course: course, 
        created: created }
    // Create a new campground and save to DB
    Book.create(newBook, function (err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            //redirect back to campgrounds page
            console.log(newlyCreated);
            res.redirect("/books");
        }
    });
});

//NEW - show form to create new campground
router.get("/new", middleware.isLoggedIn, function (req, res) {
    res.render("books/new");
});

// SHOW - shows more info about one campground
router.get("/:id", function (req, res) {
    //find the campground with provided ID
    Book.findById(req.params.id).populate("comments").exec(function (err, foundBook) {
        if (err) {
            console.log(err);
        } else {
            console.log(foundBook)
            //render show template with that campground
            res.render("books/show", { book: foundBook });
        }
    });
});

// EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkBookOwnership, function (req, res) {
    Book.findById(req.params.id, function (err, foundBook) {
        res.render("books/edit", { book: foundBook });
    });
});

// UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkBookOwnership, function (req, res) {
    // find and update the correct campground
    Book.findByIdAndUpdate(req.params.id, req.body.book, function (err, updatedBook) {
        if (err) {
            res.redirect("/books");
        } else {
            //redirect somewhere(show page)
            res.redirect("/books/" + req.params.id);
        }
    });
});

// DESTROY CAMPGROUND ROUTE
router.delete("/:id", middleware.checkBookOwnership, function (req, res) {
    Book.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.redirect("/books");
        } else {
            res.redirect("/books");
        }
    });
});


module.exports = router;