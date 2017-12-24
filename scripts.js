$(function() {
    //ripple
    var btns = document.querySelectorAll('.mdc-button');
    for (var i = 0, btn; btn = btns[i]; i++) {
        mdc.ripple.MDCRipple.attachTo(btn);
    }
});

$('.ed-home__button--menu > h1').hover(
    function () {
        $(this).addClass('animated fadeOutDownBig')
        $('.ed-home__button--menu > h4').removeClass('ed-hide');
    }, function () {
        $(this).removeClass('animated fadeOutDownBig')
        $('.ed-home__button--menu > h4').addClass('ed-hide');
    }
); 