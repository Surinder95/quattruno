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
const bcrypt = require("bcrypt")
const httpProxy = require('http-proxy')
const proxy = httpProxy.createServer({})
const jwt = require("jsonwebtoken")

//requiring routes
var commentRoutes    = require("./routes/comments"),
    bookRoutes = require("./routes/books"),
    indexRoutes      = require("./routes/index")


//DB CONFIG
const db = require('./config/key.js').mongoURI;
//Connect DB
mongoose.connect(db, {useNewUrlParser: true}).then(() => console.log("connected")).catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
app.use(cors());

//seedDB();

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

process.env.SECRET_KEY = 'secret'


app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
 });

app.get('/login', function(req, res){
    res.send('gegwqegweq');
})



 //ROUTE 
//  app.use("/", indexRoutes);
app.post("/register", function(req, res){
    const today = new Date()
    const userData = {
       first_name: req.body.first_name,
       last_name: req.body.last_name,
       email: req.body.email,
       password: req.body.password,
       date: today
   }
    //console.log(userData);
    
    var newUser = new User(
        { 
            username: req.body.email, 
            first_name: req.body.frist_name, 
            last_name: req.body.last_name,
            email: req.body.email,
            date:today
        });
    
    
    // User.register(newUser, req.body.password, function(err, user){
    //     if(err){
    //         //return res.redirect("http://localhost:3000/books");
    //         console.log(err);
    //     }
    //     console.log(user);
    //     passport.authenticate('local')(req, res, function(){
    //         res.json({redirectURI: "http://localhost:3000/books"}) 
    //     });
    //     console.log('no erro2222r!');
    // });
 


    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    User.create(userData)
                        .then(user => {
                           console.log({ status: user.email + ' registered!' })
                           res.redirect('login')
                        })
                        .catch(err => {
                            console.log('error: ' + err)
                        })
                })
            } else {
                console.log({ error: 'User already exists' })
            }
        })
        .catch(err => {
            console.log('error: ' + err)
        })
 });

//  app.post('/login', passport.authenticate('local',
//  {
//      successRedirect: "http://localhost:3000/",
//      failureRedirect: "http://localhost:3000/books"
//  }), function(req, res){
//         console.log("I did login1!!!!");

// });


 app.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    const payload = {
                        _id: user._id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email
                    }
                    let token = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token)
                } else {
                    res.json({ error: "User does not exist" })
                }
            } else {
                res.json({ error: "User does not exist" })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})


 app.get("/books", function(req, res){
    // Get all campgrounds from DB   
    //:::: It should be under book so it might be /books :::::::
    Book.find({}, function(err, books){
       if(err){
           console.log(err);
       } else {
          //res.render("books/index",{books:allBooks});
          //res.send("This is book index page");
          res.json(books);
       }
    });
});

app.post("/books", function(req, res){

    const bookData = {
        image: req.body.image,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description
      }
      console.log(bookData);
      Book.create(bookData,function(err, books){
          if(err){
              console.log(err)
          }else{
              console.log("uploaded")
              
          }
      })



})

app.get('/profile', (req, res) => {
    console.log(jwt)
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    User.findOne({
        _id: decoded._id
    })
        .then(user => {
            if (user) {
                res.json(user)
            } else {
                res.send("User does not exist")
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

 

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