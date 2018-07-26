// List view books by title and author with rendered image
page('/', app.bookView.initIndexPage);
// there is a parameter in the PATH, :book_id, therefore we need to use context in the function that is handling the path, initDetailView
page('/books/:book_id', app.Book.fetchOne(app.bookView.initDetailView, context.params.id));
page('/books/new', app.bookView.initFormView);
page();