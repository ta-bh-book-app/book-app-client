'use strict';

var app = app || {};

(function (module) {

  var errorView = {};

  errorView.initErrorPage = err => {
    app.indexJs.showOnly('.error-view');
    $('#error-message').empty();
    $('#error-message')
      .append(app.indexJs.render('error-template', err));

  }

  errorView.errorCallback = err => {
    console.error(err);
    errorView.initErrorPage(err);
  }

  module.errorView = errorView;
})(app);