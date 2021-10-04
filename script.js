
$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});
const el = document.querySelector('.scro');
// set scroll position in px
el.scrollLeft = 300;
el.scrollbottom = 300;

