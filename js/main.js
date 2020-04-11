$(document).ready(function(){
    $('.ir-arriba').hide();

    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.ir-arriba').fadeIn(200);
        } else{
            $('.ir-arriba').fadeOut(200);
        }
    });
    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop:0
        }, 150);

    });


});