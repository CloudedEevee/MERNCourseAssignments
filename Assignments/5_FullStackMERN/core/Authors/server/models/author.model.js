const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [
            true, 
            "Full Name Required"
        ],
        minlength: [
            3, 
            "Full Name must be at least 3 characters"
        ]
    }
}, { timestamps: true }); 

module.exports = mongoose.model('Author', AuthorSchema); // .model() STAYS .model()

// attributeString: {
//     type: String
// }



// attributeNum: {
//     type: Number
// }