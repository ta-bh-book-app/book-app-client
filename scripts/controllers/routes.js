page('/'
  , (context, next) => app.Book.fetchAll(() => app.bookView.initIndexPage(context, next))
);
page('/books/new'
  , context => app.bookView.initFormView(context)
);
page('/books/:book_id', context => app.Book.fetchOne(context, app.bookView.initDetailView));

page();