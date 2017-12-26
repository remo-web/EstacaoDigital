$(function() {
    //ripple
    var btns = document.querySelectorAll('.mdc-button');
    for (var i = 0, btn; btn = btns[i]; i++) {
        mdc.ripple.MDCRipple.attachTo(btn);
    }
    
});

$('.ed-home__button--menu--text').mouseenter(
    function(){
        $(this).addClass('animated fadeOutDown');
}); 

$('.ed-home__button--menu--text').mouseleave(
    function(){
        $(this).removeClass('animated fadeOutDown')
        $(this).addClass('animated fadeInUp');
});

$('.ed-home__button--menu--hover').mouseenter(
    function(){
        $(this).addClass('animated fadeInUp ed-appear');
}); 

$('.ed-home__button--menu--hover').mouseleave(
    function(){
        $(this).removeClass('animated fadeInUp ed-appear')
        $(this).addClass('animated fadeOutDown');
});