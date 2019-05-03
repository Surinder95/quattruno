var Book = require("../models/book");
var Note = require("../models/note");
var Comment = require("../models/comment");

// all the middleare goes here
var middlewareObj = {};

//Checks if user is logged in, then checks if user is owner of book
//if all true does next() command 
middlewareObj.checkBookOwnership = function (req, res, next) {
    if (req.isAuthenticated()) {
        Book.findById(req.params.id, function (err, foundBook) {
            if (err) {
                req.flash("error", "Book not found");
                res.redirect("back");
            } else {
                // does user own the campground?
                if (foundBook.author.id.equals(req.user._id)) {
                    next();
                } else {
                    req.flash("error", "You don't have permission to do that");
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
}

//Checks if user is logged in, then checks if user is owner of note
//if all true does next() command 
middlewareObj.checkNoteOwnership = function (req, res, next) {
    if (req.isAuthenticated()) {
        Note.findById(req.params.id, function (err, foundNote) {
            if (err) {
                req.flash("error", "Book not found");
                res.redirect("back");
            } else {
                // does user own the campground?
                if (foundNote.author.id.equals(req.user._id)) {
                    next();
                } else {
                    req.flash("error", "You don't have permission to do that");
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
}

//Checks if user is logged in, then checks if user is owner of comment
//if all true does next() command
middlewareObj.checkCommentOwnership = function (req, res, next) {
    if (req.isAuthenticated()) {
        Comment.findById(req.params.comment_id, function (err, foundComment) {
            if (err) {
                res.redirect("back");
            } else {
                // does user own the comment?
                if (foundComment.author.id.equals(req.user._id)) {
                    next();
                } else {
                    req.flash("error", "You don't have permission to do that");
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
}

//Checks if user is logged in
//if true does next();
middlewareObj.isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash("error", "You need to be logged in to do that");
    res.redirect("/login");
}

module.exports = middlewareObj;