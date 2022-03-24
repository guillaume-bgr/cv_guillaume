// When the DOM is loaded
$(document).ready(function() {

//On click to hide the landpage
$('.landpage').click(function() {
        $('.commands-phone').show();
        $('.slider').fadeOut(200, function() {
            $('.slider').removeClass('d-flex')
        });
        $('.landpage').slideUp(1000, function() {
            $('.landpage').removeClass('d-flex');
            $('.fadein').fadeIn(200, function() {
                // Function complete
            });
            $('.htmlcss').animate({
                width: '90%'
            }, 1500);
            $('.bootstrap').animate({
                width: '65%'
            }, 1500);
            $('.js').animate({
                width: '80%'
            }, 1500);
            $('.jquery').animate({
                width: '80%'
            }, 1500);
            $('.vuejs').animate({
                width: '60%'
            }, 1500);
            $('.wp').animate({
                width: '60%'
            }, 1500);
            $('.php').animate({
                width: '70%'
            }, 1500);
            $('.sql').animate({
                width: '50%'
            }, 1500);
        });      
});
// Slide in between vues
$('.slideup').click(function() {
    if($(this).parent().parent().prev().hasClass('landpage')) {
        $('.commands-phone').hide();
    }
    let $a = $(this).parent().parent().prev();
    let $b = $('.landpage');
    if ($a.is($b)) {
        $b.addClass('d-flex');  
    }
    $(this).parent().parent().prev().slideDown(1000, function() {
        // Function executed
    });  
    $('.slider').fadeIn(200, function() {
        $('.slider').addClass('d-flex');
    });
        
});

$('.slidedown').click(function() {
    if (!$(this).parent().parent().hasClass('vue2'))
    $(this).parent().parent().slideUp(1000, function() {
        // Function executed
    });      
});
});