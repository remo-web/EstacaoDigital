//HOME
$('.ed-home__button--menu.ed-cyan').mouseenter(
    function(){
        $('.ed-cyan > .ed-home__button--menu--text').addClass('animated fadeOutDown');
        $('.ed-cyan > .ed-home__button--menu--hover').addClass('animated fadeInUp');
        $('.ed-cyan > .ed-home__button--menu--hover').removeClass('fadeOutDown');
}); 

$('.ed-home__button--menu.ed-cyan').mouseleave(
    function(){
        $('.ed-cyan > .ed-home__button--menu--text').removeClass('animated fadeOutDown');
        $('.ed-cyan > .ed-home__button--menu--text').addClass('animated fadeInUp');
        $('.ed-cyan > .ed-home__button--menu--hover').removeClass('animated fadeInUp');
        $('.ed-cyan > .ed-home__button--menu--hover').addClass('animated fadeOutDown');
});

$('.ed-home__button--menu.ed-magenta').mouseenter(
    function(){
        $('.ed-magenta > .ed-home__button--menu--text').addClass('animated fadeOutDown');
        $('.ed-magenta > .ed-home__button--menu--hover').addClass('animated fadeInUp');
        $('.ed-magenta > .ed-home__button--menu--hover').removeClass('fadeOutDown');
}); 

$('.ed-home__button--menu.ed-magenta').mouseleave(
    function(){
        $('.ed-magenta > .ed-home__button--menu--text').removeClass('animated fadeOutDown');
        $('.ed-magenta > .ed-home__button--menu--text').addClass('animated fadeInUp');
        $('.ed-magenta > .ed-home__button--menu--hover').removeClass('animated fadeInUp');
        $('.ed-magenta > .ed-home__button--menu--hover').addClass('animated fadeOutDown');
});

$('.ed-home__button--menu.ed-yellow').mouseenter(
    function(){
        $('.ed-yellow > .ed-home__button--menu--text').addClass('animated fadeOutDown');
        $('.ed-yellow > .ed-home__button--menu--hover').addClass('animated fadeInUp');
        $('.ed-yellow > .ed-home__button--menu--hover').removeClass('fadeOutDown');
}); 

$('.ed-home__button--menu.ed-yellow').mouseleave(
    function(){
        $('.ed-yellow > .ed-home__button--menu--text').removeClass('animated fadeOutDown');
        $('.ed-yellow > .ed-home__button--menu--text').addClass('animated fadeInUp');
        $('.ed-yellow > .ed-home__button--menu--hover').removeClass('animated fadeInUp');
        $('.ed-yellow > .ed-home__button--menu--hover').addClass('animated fadeOutDown');
});

$('.ed-home__button--menu.ed-black').mouseenter(
    function(){
        $('.ed-black > .ed-home__button--menu--text').addClass('animated fadeOutDown');
        $('.ed-black > .ed-home__button--menu--hover').addClass('animated fadeInUp');
        $('.ed-black > .ed-home__button--menu--hover').removeClass('fadeOutDown');
}); 

$('.ed-home__button--menu.ed-black').mouseleave(
    function(){
        $('.ed-black > .ed-home__button--menu--text').removeClass('animated fadeOutDown');
        $('.ed-black > .ed-home__button--menu--text').addClass('animated fadeInUp');
        $('.ed-black > .ed-home__button--menu--hover').removeClass('animated fadeInUp');
        $('.ed-black > .ed-home__button--menu--hover').addClass('animated fadeOutDown');
});

//MENU DESTAQUES CHIP
$(function () {
    $('#destaques-menu-lonas').hover(function() {
        $('#destaques-menu-lonas-chip').toggleClass('animated fadeIn');
        $('#destaques-menu-lonas-chip').removeClass('ed-hide');
    }, function() {
        $('#destaques-menu-lonas-chip').addClass('ed-hide');
    });
    $('#destaques-menu-adesivos').hover(function() {
        $('#destaques-menu-adesivos-chip').toggleClass('animated fadeIn');
        $('#destaques-menu-adesivos-chip').removeClass('ed-hide');
    }, function() {
        $('#destaques-menu-adesivos-chip').addClass('ed-hide');
    });
    $('#destaques-menu-placas').hover(function() {
        $('#destaques-menu-placas-chip').toggleClass('animated fadeIn');
        $('#destaques-menu-placas-chip').removeClass('ed-hide');
    }, function() {
        $('#destaques-menu-placas-chip').addClass('ed-hide');
    });
    $('#destaques-menu-tecido').hover(function() {
        $('#destaques-menu-tecido-chip').toggleClass('animated fadeIn');
        $('#destaques-menu-tecido-chip').removeClass('ed-hide');
    }, function() {
        $('#destaques-menu-tecido-chip').addClass('ed-hide');
    });
});