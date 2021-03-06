'use strict';

var app = app || {};

(function (module) {

  function Book(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

  Book.all = [];

  // Takes an argument for the specified templateID, uses that templateID to run the render function (located in index.js) which will compile the handlebars template.
  Book.prototype.toHtml = function (templateID) {
    return app.render(templateID, this);
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
  // TODO: pass context into callback on fetchOne
  // Callback function is initDetailPage function
  Book.fetchOne = (context, callback) => {
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/books/${context.params.book_id}`)
    // Result comes from the corresponding (get path) get request in server.js. Result is an array with a single json object element representing a book.
      .then(result => context.book = result[0])
      .then(callback)
      .catch(app.errorView.errorCallback);
  };

  Book.create = book => 
    $.post(`${app.ENVIRONMENT.apiUrl}/api/v1/books`, book)
      .then(() => page('/'))
      .catch(app.errorView.errorCallback);

  module.Book = Book;
})(app);