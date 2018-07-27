'use strict';

var app = app || {};

(function (module) {

  // function errorCallback(err) {
  //   console.error(err);
  //   module.errorView.initErrorPage(err);
  // }

  function Book(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

  Book.all = [];

  Book.prototype.toHtml = function () {
    return app.render(`book-list-template`, this);
  };

  Book.loadAll = rows => {
    rows.sort((a,b) => {
      a.title - b.title;
    });

    Book.all = rows.map(bookObj => new Book(bookObj));
  };

  Book.fetchAll = callback => {
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/books`)
      .then(results => {
        Book.loadAll(results);
        callback();
      })
      .catch(app.errorView.errorCallback);
  };

  // need another parameter, the id and the callback
  // here sending id
  Book.fetchOne = (ctx, callback) => {
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/books/${ctx.params.book_id}`)
    // Result comes from the corresponding (get path) get request in server.js. Result is an array with a single json object element representing a book.
      .then(bookShelf => ctx.book = bookShelf[0])
      .then(callback)
      .catch(app.errorView.errorCallback);
  };

  module.Book = Book;
})(app);