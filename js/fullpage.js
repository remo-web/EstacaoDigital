$(document).ready(function() {
	$('#fullpage').fullpage({
        anchors: ['home', 'Lonas', 'Adesivos', 'Placas', 'Tecido', 'TheEnd'],
        scrollOverflow: true,
        keyboardScrolling: false,
        normalScrollElements:'.fp-kill',
        responsiveHeight: 768,
    });
});