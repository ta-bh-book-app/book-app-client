'use strict';
var app = app || {};


(function (module) {
  var bookView = {};

  bookView.initIndexPage = () => {
    app.showOnly('#list-view');
    app.Book.all.map(currentBook => {
      $('#list-view').append(currentBook.toHtml());
    });
  }

  module.bookView = bookView;
})(app);

$(function () {
  app.Book.fetchAll(app.bookView.initIndexPage);
});

