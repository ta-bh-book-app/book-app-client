// List view books by title and author with rendered image
page('/', app.bookView.initIndexPage);
page('/books/:book_id', app.bookView.initDetailView);
page('/books/new', app.bookView.initFormView);
page();