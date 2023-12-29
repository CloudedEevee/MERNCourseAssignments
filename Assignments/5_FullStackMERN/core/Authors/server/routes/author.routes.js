const AuthorController = require('../controllers/author.controller');

module.exports = app => {
    app.get('/api', AuthorController.index);
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.get('/api/authors/:id', AuthorController.findOneAuthor);
    app.patch('/api/authors/:id', AuthorController.updateAuthor);
    app.post('/api/authors', AuthorController.createNewAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteExistingAuthor);
}