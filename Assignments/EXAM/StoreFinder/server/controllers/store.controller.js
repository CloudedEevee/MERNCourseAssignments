const Store = require('../models/store.model'); //.model STAYS .model

module.exports = {
    ///////////////////////////////////////////// CREATE
    createNewStore: (req, res) => {
        const {storeName, number, isOpen} = req.body;
        Store.create({
            storeName: storeName,
            number: number,
            isOpen: isOpen
        })
            .then(store => {
                console.log(store);
                res.json(store);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            }) // Validations
    },

    ///////////////////////////////////////////// READ
    findAllStores: (req, res) => {
        Store.find({})
        .then((stores) => {
            console.log("stores.controller line 26:" + stores);
            res.json({ stores })
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });
    },

    findOneStore: (req, res) => {
        Store.findOne({ _id: req.params.id })
            .then(oneStore => {
                console.log(oneStore);
                res.json({ store: oneStore })
            })
            .catch((err) => {
                console.log(err);
                res.json({ message: 'Something went wrong', error: err })
            });
    },

    ///////////////////////////////////////////// UPDATE
    updateStore: (req, res) => {
        Store.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedStore => {
                console.log(updatedStore);
                res.json(updatedStore)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            }) // Validations
    },

    ///////////////////////////////////////////// DESTROY
    deleteExistingStore: (req, res) => {
        Store.deleteOne({ _id: req.params.id })
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


