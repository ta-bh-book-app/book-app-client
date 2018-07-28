'use strict';
var app = app || {};


(function (module) {
  var bookView = {};

  bookView.initIndexPage = () => {
    $('#list-view').empty();
    app.showOnly('#list-view');
    app.Book.all.map(currentBook => {
      $('#list-view').append(currentBook.toHtml(`book-list-template`));
    });
  }



  // This empties the contents of detail-view and then renders it again. It then appends the return of toHtml (located in book.js) to the detail-view container. 
  bookView.initDetailView = context => {
    let singleBook = new app.Book(context);
    $('#detail-view').empty();
    app.showOnly('#detail-view');
    $('#detail-view').append(singleBook.toHtml('book-detail-template'));
  }

  bookView.initFormView = () => {
    app.showOnly('#book-add-form-view');
    


    $('#book-add-form').on('submit', (event) => {
      event.preventDefault();
      let newBook = {
        title: event.target.title.value,
        author: event.target.author.value,
        isbn: event.target.isbn.value,
        image_url: event.target.image_url.value,
        description: event.target.description.value
      };
      module.Book.create(newBook);
    });

  }

  module.bookView = bookView;
})(app);


