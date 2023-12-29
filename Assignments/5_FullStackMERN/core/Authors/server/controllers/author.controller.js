const Author = require('../models/author.model'); //.author STAYS .author

module.exports = {
    ///////////////////////////////////////////// CREATE
    createNewAuthor: (req, res) => {
        const {fullName} = req.body;
        Author.create({
            fullName: fullName,
        })
            .then(author => {
                console.log(author);
                res.json(author);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            }) // Validations
    },

    ///////////////////////////////////////////// READ
    findAllAuthors: (req, res) => {
        Author.find({})
        .then((authors) => {
            console.log("authors.controller line 24:" + authors);
            res.json({ authors })
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });
    },

    findOneAuthor: (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then(oneAuthor => {
                console.log(oneAuthor);
                res.json({ author: oneAuthor })
            })
            .catch((err) => {
                console.log(err);
                res.json({ message: 'Something went wrong', error: err })
            });
    },

    ///////////////////////////////////////////// UPDATE
    updateAuthor: (req, res) => {
        Author.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedAuthor => {
                console.log(updatedAuthor);
                res.json(updatedAuthor)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            }) // Validations
    },

    ///////////////////////////////////////////// DESTROY
    deleteExistingAuthor: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then(deleteConfirm => {
                console.log(deleteConfirm);
                res.json(deleteConfirm)
            })
            .catch((err) => {
                console.log(err);
                res.json({ message: 'Something went wrong', error: err })
            });
    },

    ///////////////////////////////////////////// OTHER
    index: (req, res) => {
        res.json({ message: "Hello World" });
    }
}
