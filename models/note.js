var mongoose = require("mongoose");

var noteSchema = mongoose.Schema({
    className: String,
    classNumber: String,
    description: String,
    image: String,
    created: {
        type: Date, 
        default: Date.now
        
    }


});

module.exports = mongoose.model("Note", noteSchema);