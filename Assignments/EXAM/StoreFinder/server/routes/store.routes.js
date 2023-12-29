const StoreController = require('../controllers/store.controller');

module.exports = app => {
    app.get('/api', StoreController.index);
    app.get('/api/stores', StoreController.findAllStores);
    app.get('/api/stores/:id', StoreController.findOneStore);
    app.patch('/api/stores/:id', StoreController.updateStore);
    app.post('/api/stores', StoreController.createNewStore);
    app.delete('/api/stores/:id', StoreController.deleteExistingStore);
}