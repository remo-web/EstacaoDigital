$(document).ready(function() {
	$('#fullpage').fullpage({
        anchors: ['home', 'Lonas', 'Adesivos', 'Placas', 'Tecido', 'TheEnd'],
        scrollOverflow: true,
        keyboardScrolling: false,
        normalScrollElements:'.fp-kill',
        responsiveWidth: 840,
        animateAnchor: false,
    });
});

//MAIN FOOTER
$('#ed-footer-quemsomos').click(function(e){
    $.fn.fullpage.silentMoveTo('home');
});
$('#ed-footer-servicos').click(function(e){
    $.fn.fullpage.silentMoveTo('home');
});
$('#ed-footer-fizemos').click(function(e){
    $.fn.fullpage.silentMoveTo('home');
});
$('#ed-footer-contato').click(function(e){
    $.fn.fullpage.silentMoveTo('home');
});

//OUTROS FOOTER
$('.ed-footer--toslide__lonas').click(function(e){
    e.preventDefault();
    $.fn.fullpage.silentMoveTo('Lonas');
});
$('.ed-footer--toslide__adesivos').click(function(e){
    e.preventDefault();
    $.fn.fullpage.silentMoveTo('Adesivos');
});
$('.ed-footer--toslide__placas').click(function(e){
    e.preventDefault();
    $.fn.fullpage.silentMoveTo('Placas');
});
$('.ed-footer--toslide__tecido').click(function(e){
    e.preventDefault();
    $.fn.fullpage.silentMoveTo('Tecido');
});
