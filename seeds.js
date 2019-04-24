var mongoose = require("mongoose");
var Book = require("./models/book");
var Comment   = require("./models/comment");

var data = [
    {
      title: "First",
      image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
      price: 100,
      description: "dsflknflkfsnllkn"
    },
    {
      title: "Second",
      image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
      price: 100,
      description: "Second book"
    },
    {
      title: "Third",
      image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
      price: 100,
      description:
        "fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
      title: "Fourth",
      image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
      price: 100,
      description: "dsfl123knflkfsnllkn"
    },
    {
      title: "Fifth",
      image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
      price: 100,
      description: "dsflknf123lkfsnllkn"
    },
    {
      title: "Sixth",
      image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
      price: 100,
      description: "dsflknf123lkfsnllkn"
    },
    {
      title: "Seventh",
      image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
      price: 100,
      description: "dsflknf123lkfsnllkn"
    },
    {
      title: "8",
      image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
      price: 100,
      description: "dsflknflkfsnllkn"
    },
    {
      title: "9",
      image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
      price: 100,
      description: "Second book"
    },
    {
      title: "10",
      image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
      price: 100,
      description:
        "Thrid bookd do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
    },
    {
      title: "11",
      image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
      price: 100,
      description: "dsfl123knflkfsnllkn"
    },
    {
      title: "12",
      image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
      price: 100,
      description: "dsflknf123lkfsnllkn"
    },
    {
      title: "13",
      image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
      price: 100,
      description: "dsflknf123lkfsnllkn"
    },
    {
      title: "14",
      image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
      price: 100,
      description: "dsflknf123lkfsnllkn"
    }
  
]

function seedDB(){
   //Remove all campgrounds
   Book.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed books!");
         //add a few campgrounds
        data.forEach(function(seed){
            Book.create(seed, function(err, book){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a book");
                    //create a comment
                    Comment.create(
                        {
                            text: "This book is great",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                book.comments.push(book);
                                book.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}


module.exports = seedDB;
