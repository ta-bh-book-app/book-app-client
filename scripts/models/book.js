'use strict';

var app = app || {};

(function (module) {

  function Book(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

  Book.all = [];

  Book.prototype.toHtml = function () {
    return app.indexJs.render(`book-list-template`, this);
  };

  Book.loadAll = rows => {
    rows.sort((a,b) => {
      a.title - b.title;
    });

    Book.all = rows.map(bookObj => {
      new Book(bookObj)
    });
  };

  Book.fetchAll = callback => {
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/books`)
      .then(results => {
        Book.loadAll(results);
        callback();
      })
      .catch(app.errorView.errorCallback(err));
  }

  module.Book = Book;
})(app);