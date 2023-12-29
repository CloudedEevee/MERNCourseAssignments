const ModelController = require('../controllers/model.controller');

module.exports = app => {
    app.get('/api', ModelController.index);
    app.get('/api/models', ModelController.findAllModels);
    app.get('/api/models/:id', ModelController.findOneModel);
    app.patch('/api/models/:id', ModelController.updateModel);
    app.post('/api/models', ModelController.createNewModel);
    app.delete('/api/models/:id', ModelController.deleteExistingModel);
}