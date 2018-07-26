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

  // need to pass the context object
  // context needed in route
  // route is going to need context as well
  // passing in ctx
  // empty
  // show only
  // append
  bookView.initDetailView = () => {
    // app.Book.fetchOne()
    app.showOnly('#detail-view');
  }

  bookView.initFormView = () => {
    app.showOnly('#list-view');
  }

  module.bookView = bookView;
})(app);

$(function () {
  app.Book.fetchAll(app.bookView.initIndexPage);
});

