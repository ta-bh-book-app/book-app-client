'use strict';
var app = app || {};


(function (module) {
  var bookView = {};

  bookView.initIndexPage = () => {
    app.indexJs.showOnly('.book-view');
    app.Book.all.map(currentBook => {
      $('.book-view').append(currentBook.toHtml());
    });
  }

  module.bookView = bookView;
})(app);

$(function () {
  app.Book.fetchAll(app.bookView.initIndexPage);
});

