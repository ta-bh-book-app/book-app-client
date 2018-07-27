// List view books by title and author with rendered image
// The below code runs the app.bookview.initIndexPage function when returning to the root page. The app.Book.fetchAll is also run on initial page load; this call can be found at the bottom of book-view.js 
page('/', context => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/:book_id', context => app.Book.fetchOne(context, app.bookView.initDetailView));
// use context fetchOne using context as an arguement, plus the init call as the second arguement
// look at rdeirect pass context objects
// 
page('/books/new', context => app.bookView.initFormView(context));
page();