var app = app || {};

(function(module){
  let indexJs = {};

  let productionApiUrl = 'https://ta-bh-book-app-server.herokuapp.com';
  let developmentApiUrl = 'http://localhost:3000';

  indexJs.isProduction = /^(?!localhost|127)/.test(window.location.hostname);

  indexJs.ENVIRONMENT = {
    apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
  };

  //  Display functions
  indexJs.showOnly(selector => {
    $('.container').hide();
    $(selector).show();
  });

  indexJs.render((templateId, data) => {
    indexJs.template = Handlebars.compile($(`#${templateId}`).text());
    return indexJs.template(data);
  });
  module.indexJs = indexJs;
})(app);