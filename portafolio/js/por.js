(function($){
    "use strict";

    var burgerMenu = function(){
        $('.burger').click(function(e){
            $(window).scrollTop(0);
            if (!$('.burger').hasClass('active'))
            $('.burger').addClass('active');
            else
            $('.burger').removeClass('active');
        });
    }

    burgerMenu();
    var siteIstotope = function (){
        



    }



});