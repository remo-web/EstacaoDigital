//DESTAQUE - Lonas
$(function() {
    $('#lonas-banners-more').click(function() {
        if (
            $('.ed-destaque--lonas__sanet').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--lonas__sanet').removeClass('animated fadeIn');
            $('.ed-destaque--lonas__sanet').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__banners').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__banners').addClass('animated fadeIn');
        } else if (
            $('.ed-destaque--lonas__back').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--lonas__back').removeClass('animated fadeIn');
            $('.ed-destaque--lonas__back').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__banners').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__banners').addClass('animated fadeIn');
        } else if (
            $('.ed-destaque--lonas__banners').hasClass('animated fadeOut')
        ) {
            $('.ed-destaque--lonas__banners').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__banners').addClass('animated fadeIn');
        } else {
            $('.ed-destaque--lonas__banners').removeClass('ed-hide');
            $('.ed-destaque--lonas__banners').addClass('animated fadeIn');
        }
    });
    $('#lonas-back-more').click(function() {
        if (
            $('.ed-destaque--lonas__banners').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--lonas__banners').removeClass('animated fadeIn');
            $('.ed-destaque--lonas__banners').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__back').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__back').addClass('animated fadeIn');
            
        } else if (
            $('.ed-destaque--lonas__sanet').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--lonas__sanet').removeClass('animated fadeIn');
            $('.ed-destaque--lonas__sanet').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__back').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__back').addClass('animated fadeIn');
        } else if (
            $('.ed-destaque--lonas__back').hasClass('animated fadeOut')
        ) {
            $('.ed-destaque--lonas__back').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__back').addClass('animated fadeIn');
        } else {
            $('.ed-destaque--lonas__back').removeClass('ed-hide');
            $('.ed-destaque--lonas__back').addClass('animated fadeIn');
        }
    });
    $('#lonas-sanet-more').click(function() {
        if (
            $('.ed-destaque--lonas__banners').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--lonas__banners').removeClass('animated fadeIn');
            $('.ed-destaque--lonas__banners').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__sanet').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__sanet').addClass('animated fadeIn');
            
        } else if (
            $('.ed-destaque--lonas__back').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--lonas__back').removeClass('animated fadeIn');
            $('.ed-destaque--lonas__back').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__sanet').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__sanet').addClass('animated fadeIn');
            
        } else if (
            $('.ed-destaque--lonas__sanet').hasClass('animated fadeOut')
        ) {
            $('.ed-destaque--lonas__sanet').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__sanet').addClass('animated fadeIn');
        } else {
            $('.ed-destaque--lonas__sanet').removeClass('ed-hide');
            $('.ed-destaque--lonas__sanet').addClass('animated fadeIn');
        }
    });
});