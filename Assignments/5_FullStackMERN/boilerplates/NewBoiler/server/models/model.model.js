const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
    attribute1: {
        type: String,
        required: [
            true, 
            "Attribute1 Required"
        ],
        minlength: [
            2, 
            "Attribute1 must be at least 2 characters"
        ]
    },
    attribute2: {
        type: Number,
        required: [
            true, 
            "Attribute2 Required"
        ]
    },
    attribute3: {
        type: String
    }
}, { timestamps: true }); 

module.exports = mongoose.model('Model', ModelSchema); // .model() STAYS .model()

// attributeString: {
//     type: String
// }



// attributeNum: {
//     type: Number
// }