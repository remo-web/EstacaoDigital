$(window).on('hashchange', function() {
    if (window.location.hash.indexOf('') == 1)
    {
        $('.ed-destaques--menu').removeClass('animated fadeIn');
        $('.ed-destaques--menu').addClass('animated fadeOut ed-hide');
    }
    if (window.location.hash.indexOf('home') == 1)
    {
        $('.ed-destaques--menu').removeClass('animated fadeIn');
        $('.ed-destaques--menu').addClass('animated fadeOut ed-hide');
    }
    if (window.location.hash.indexOf('Lonas') == 1) 
    {
        $('.ed-destaques--menu').removeClass('animated fadeOut ed-hide');
        $('.ed-destaques--menu').addClass('animated fadeIn');
    }
    if (window.location.hash.indexOf('Adesivos') == 1) 
    {
        $('.ed-destaques--menu').removeClass('animated fadeOut ed-hide');
        $('.ed-destaques--menu').addClass('animated fadeIn');
    }
    if (window.location.hash.indexOf('Placas') == 1) 
    {
        $('.ed-destaques--menu').removeClass('animated fadeOut ed-hide');
        $('.ed-destaques--menu').addClass('animated fadeIn');
    }
    if (window.location.hash.indexOf('Tecido') == 1) 
    {
        $('.ed-destaques--menu').removeClass('animated fadeOut ed-hide');
        $('.ed-destaques--menu').addClass('animated fadeIn');
    }
    if (window.location.hash.indexOf('TheEnd') == 1) 
    {
        $('.ed-destaques--menu').removeClass('animated fadeIn');
        $('.ed-destaques--menu').addClass('animated fadeOut ed-hide');
    }
});
