// CODE_REVIEW sam to napisałeś, czy kopiuj wklej?
// Jak sam to szanuje, jak kopiuj wklej to też, ale za coś innego 😜
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