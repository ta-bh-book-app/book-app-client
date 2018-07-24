'use strict';
var app = app || {};
var bookView = {};

(function (module) {
    bookView.handleMainNav = () => {
        $('nav').on('click', '.tab', function(e) {
            e.preventDefault();
            $('.tab-content').hide();
            $(`#${$(this).data('content')}`).fadeIn();
        });
    
        $('nav .tab:first').click();
    };
    module.bookView = bookView;
})(app);

