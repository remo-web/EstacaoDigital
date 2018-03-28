$(window).on('hashchange', function() {
    if (window.location.hash.indexOf('') == 1) {
        document.getElementById('ed-gohome').click();
    }
    if (window.location.hash.indexOf('QuemSomos') == 1) {
        document.getElementById('ed-footer-quemsomos').click();
    }
    if (window.location.hash.indexOf('Servicos') == 1) {
        document.getElementById('ed-footer-servicos').click();
    }
    if (window.location.hash.indexOf('Fizemos') == 1) {
        document.getElementById('ed-footer-fizemos').click();
    }
    if (window.location.hash.indexOf('Contato') == 1) {
        document.getElementById('ed-footer-contato').click();
    }
});