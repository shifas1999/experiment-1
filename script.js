let age = prompt('how old are you',100);
alert(`You are ${age} years old!`); // You are 100 years old!
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

