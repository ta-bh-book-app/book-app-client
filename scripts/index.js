var app = app || {};

(function(module){

  let productionApiUrl = 'https://ta-bh-book-app-server.herokuapp.com';
  let developmentApiUrl = 'http://localhost:3000';

  module.isProduction = /^(?!localhost|127)/.test(window.location.hostname);

  module.ENVIRONMENT = {
    apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
  };

  //  Display functions
  module.showOnly = (selector) => {
    $('.container').hide();
    $(selector).show();
  };

  module.render = (templateId, data) => {
    module.template = Handlebars.compile($(`#${templateId}`).text());
    return module.template(data);
  };
})(app);