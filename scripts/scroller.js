$(document).ready(function (){
    $(".about_nav").click(function (){
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 1000);
    });
    $(".skills_nav").click(function (){
        $('html, body').animate({
            scrollTop: $(".skills").offset().top
        }, 1000);
    });
    $(".portfolio_nav").click(function (){
        $('html, body').animate({
            scrollTop: $(".portfolio").offset().top
        }, 1000);
    });
    $(".contact_nav").click(function (){
        $('html, body').animate({
            scrollTop: $(".contact").offset().top
        }, 1000);
    });
});