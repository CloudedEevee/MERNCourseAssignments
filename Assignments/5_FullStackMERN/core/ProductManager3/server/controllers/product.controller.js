const Product = require('../models/product.model');

module.exports.index = (req, res) => {
    res.json({ message: "Hello World" });
}

module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then((products) => {
            console.log(`products line 10: ${products}`);
            res.json({ products })
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneProduct => {
            console.log(oneProduct);
            res.json({ product: oneProduct })
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            console.log(newlyCreatedProduct);
            res.json({ product: newlyCreatedProduct })
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            console.log(updatedProduct);
            res.json(updatedProduct)
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.deleteExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deleteConfirm => {
            console.log(deleteConfirm);
            res.json(deleteConfirm)
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });
}