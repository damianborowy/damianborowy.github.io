$(document).ready(function (){
    $(".about_click").click(function (){
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 1000);
    });
    $(".skills_click").click(function (){
        $('html, body').animate({
            scrollTop: $(".skills").offset().top
        }, 1000);
    });
    $(".portfolio_click").click(function (){
        $('html, body').animate({
            scrollTop: $(".portfolio").offset().top
        }, 1000);
    });
    $(".contact_click").click(function (){
        $('html, body').animate({
            scrollTop: $(".contact").offset().top
        }, 1000);
    });
});