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

  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  module.errorView = errorView;
})(app);