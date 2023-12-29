const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    storeName: {
        type: String,
        required: [
            true, 
            "Store Name Required"
        ],
        minlength: [
            3, 
            "Name must be at least 3 characters"
        ]
    },
    number: {
        type: Number,
        required: [
            true, 
            "Store Number Required"
        ],
        min: [
            1,
            "Store Number must be greater than 0"
        ]
    },
    isOpen: {
        type: Boolean
    }
}, { timestamps: true }); 

module.exports = mongoose.model('Store', StoreSchema); // .model() STAYS .model()

// attributeString: {
//     type: String
// }



// attributeNum: {
//     type: Number
// }