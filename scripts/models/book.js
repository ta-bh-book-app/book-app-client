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


  // loadOne will receive an array of one element from the fetchOne get request this array is passed in as row 
  Book.loadOne = row => {
    // Book.all array is updated to be equal to the single book object returned from fetchOne. The book object is created using the one object stored in the row array  
    Book.all = row.map(bookObj => new Book(bookObj));
  }

  Book.fetchAll = callback => {
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/books`)
      .then(results => {
        Book.loadAll(results);
        callback();
      })
      .catch(app.errorView.errorCallback);
  };

  Book.fetchOne = callback => {
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/books:id`)
    // Result comes from the corresponding (get path) get request in server.js. Result is an array with a single json object element
      .then(result => {
        Book.loadOne(result);
      })
      .then(callback())
      .catch(app.errorView.errorCallback);
  };

  module.Book = Book;
})(app);