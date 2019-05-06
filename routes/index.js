var express = require("express");
var router  = express.Router();
var bodyParser  = require("body-parser");
var passport = require("passport");
var User = require("../models/user");
const cors = require("cors")
router.use(cors())

//root route
router.get("/", function(req, res){
    res.send("Homepage This is working now!!!");
});

// show register form
router.get("/register", function(req, res){
   res.send("register"); 
});

//handle sign up logic
router.post("/register", function(req, res){
   const today = new Date();
   //  var newUser = new User({username: req.body.email});
   const userData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      created: tody
   }
    console.log(userData.eamil);
    console.log(userData);
   //  User.register(newUser, req.body.password, function(err, user){
   //      if(err){
   //          req.flash("error", err.message);
   //          return res.send("error");
   //      }
   //      passport.authenticate("local")(req, res, function(){
   //         req.flash("success", "Welcome to YelpCamp " + user.username);
   //         res.redirect("/books"); 
   //      });
   //  });
});

//show login form
router.get("/login", function(req, res){
   res.render("login"); 
});

//handling login logic
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/books",
        failureRedirect: "/login"
    }), function(req, res){
});

// logout route
router.get("/logout", function(req, res){
   req.logout();
   req.flash("success", "Logged you out!");
   res.redirect("/books");
});



module.exports = router;