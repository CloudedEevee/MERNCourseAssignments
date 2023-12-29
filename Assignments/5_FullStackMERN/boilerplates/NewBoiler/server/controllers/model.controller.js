const Model = require('../models/model.model'); //.model STAYS .model

module.exports = {
    ///////////////////////////////////////////// CREATE
    createNewModel: (req, res) => {
        const {attribute1, attribute2, attribute3} = req.body;
        Model.create({
            attribute1: attribute1,
            attribute2: attribute2,
            attribute3: attribute3
        })
            .then(model => {
                console.log(model);
                res.json(model);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            }) // Validations
    },

    ///////////////////////////////////////////// READ
    findAllModels: (req, res) => {
        Model.find({})
        .then((models) => {
            console.log("models.controller line 24:" + models);
            res.json({ models })
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });
    },

    findOneModel: (req, res) => {
        Model.findOne({ _id: req.params.id })
            .then(oneModel => {
                console.log(oneModel);
                res.json({ model: oneModel })
            })
            .catch((err) => {
                console.log(err);
                res.json({ message: 'Something went wrong', error: err })
            });
    },

    ///////////////////////////////////////////// UPDATE
    updateModel: (req, res) => {
        Model.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedModel => {
                console.log(updatedModel);
                res.json(updatedModel)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            }) // Validations
    },

    ///////////////////////////////////////////// DESTROY
    deleteExistingModel: (req, res) => {
        Model.deleteOne({ _id: req.params.id })
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


// module.exports.index = (req, res) => {
//     res.json({ message: "Hello World" });
// }

// module.exports.findAllModels = (req, res) => {
//     Model.find({})
//         .then((models) => {
//             console.log(`models line 10: ${models}`);
//             res.json({ models })
//         })
//         .catch((err) => {
//             console.log(err);
//             res.json({ message: 'Something went wrong', error: err })
//         });
// }

// module.exports.findOneModel = (req, res) => {
//     Model.findOne({ _id: req.params.id })
//         .then(oneModel => {
//             console.log(oneModel);
//             res.json({ model: oneModel })
//         })
//         .catch((err) => {
//             console.log(err);
//             res.json({ message: 'Something went wrong', error: err })
//         });
// }

// module.exports.createNewModel = (req, res) => {
//     Model.create(req.body)
//         .then(newlyCreatedModel => {
//             console.log(newlyCreatedModel);
//             res.json({ model: newlyCreatedModel })
//         })
//         .catch((err) => {
//             console.log(err);
//             res.json({ message: 'Something went wrong', error: err })
//         });
// }

// module.exports.updateModel = (req, res) => {
//     Model.findOneAndUpdate(
//         { _id: req.params.id },
//         req.body,
//         { new: true, runValidators: true }
//     )
//         .then(updatedModel => {
//             console.log(updatedModel);
//             res.json(updatedModel)
//         })
//         .catch((err) => {
//             console.log(err);
//             res.json({ message: 'Something went wrong', error: err })
//         });
// }

// module.exports.deleteExistingModel = (req, res) => {
//     Model.deleteOne({ _id: req.params.id })
//         .then(deleteConfirm => {
//             console.log(deleteConfirm);
//             res.json(deleteConfirm)
//         })
//         .catch((err) => {
//             console.log(err);
//             res.json({ message: 'Something went wrong', error: err })
//         });
// }