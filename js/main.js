$(document).ready(function(){
    $('body').hide(0).delay(500).fadeIn(2000);
});

$(".mouse").click(function() {
    $('html,body').animate({
        scrollTop: $(".works").offset().top},
        'slow');
});