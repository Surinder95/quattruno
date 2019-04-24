//REQUIRE CONFIG
var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    flash       = require("connect-flash"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    Book  = require("./models/book"),
    Comment     = require("./models/comment"),
    User        = require("./models/user"),
    seedDB      = require("./seeds")
    const cors = require("cors")

//requiring routes
var commentRoutes    = require("./routes/comments"),
    bookRoutes = require("./routes/books"),
    indexRoutes      = require("./routes/index")


//DB CONFIG
const db = require('./config/key.js').mongoURI;
//Connect DB
mongoose.connect(db, {useNewUrlParser: true}).then(() => console.log("connected")).catch(err => console.log(err));

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
app.use(cors());

seedDB();

app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));

//PASSPORT CONIF
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
 });
 

 //ROUTE 
 app.use("/", indexRoutes);
 app.use("/books", bookRoutes);
 app.use("/books/:id/comments", commentRoutes);
 

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`)); 


//RESTFUL ROUTES

// name                url             verb        desc.
// ========================================================
// INDEX               /dogs           GET         Display a list of all dog
// NEW                 /dogs/new       GET         Display form to make a new dog
// CREATE              /dogs/          POST        Add new dog to DB
// SHOW                /dogs/:id       GET         Shows info about one dog

// INDEX               /campgrounds        GET
// NEW                 /campgrounds/new    GET
// CREATE              /campgrounds        POST
// SHOW                /campgrounds/:id


// NEW                 /campgrounds/:id/comments/new           GET
// CREATE              /campgrounds/:id/comments               POST