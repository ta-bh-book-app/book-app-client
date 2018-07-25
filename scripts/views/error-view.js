'use strict';

var app = app || {};

(function (module) {

  var errorView = {};

  errorView.initErrorPage = err => {
    app.showOnly('.error-view');
    $('#error-message').empty();
    $('#error-message')
      .append(app.render('error-template', err));

  }

  // errorView.errorCallback = err => {
  //   console.error(err);
  //   errorView.initErrorPage(err);
  // }

  module.errorView = errorView;
})(app);