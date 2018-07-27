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
    $('#detail-view').empty();
    app.showOnly('#detail-view');
    $('#detail-view').append(app.Book.all[0].toHtml('book-detail-template'));
  }

  bookView.initFormView = () => {
    app.showOnly('#list-view');
  }

  module.bookView = bookView;
})(app);

$(function () {
  app.Book.fetchAll(app.bookView.initIndexPage);
});

