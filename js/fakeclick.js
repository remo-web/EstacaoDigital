window.onload = function() {
    if (location.hash === "#QuemSomos") {
        document.getElementById('ed-quemsomos').click();
    }
    if (location.hash === "#Servicos") {
        document.getElementById('ed-servicos').click();
    }
    if (location.hash === "#Fizemos") {
        document.getElementById('ed-fizemos').click();
    }
    if (location.hash === "#Contato") {
        document.getElementById('ed-contato').click();
    }
    if (location.hash === "/simples") {
        document.getElementById('adesivos-simples-more').click();
    }
};

$(window).on('hashchange', function() {
    if (window.location.hash.indexOf('') == 1) {
        document.getElementById('ed-home-tab').click();
    }
    if (window.location.hash.indexOf('home') == 1) {
        document.getElementById('ed-home-tab').click();
    }
    if (window.location.hash.indexOf('QuemSomos') == 1) {
        document.getElementById('ed-quemsomos').click();
    }
    if (window.location.hash.indexOf('Servicos') == 1) {
        document.getElementById('ed-servicos').click();
    }
    if (window.location.hash.indexOf('Fizemos') == 1) {
        document.getElementById('ed-fizemos').click();
    }
    if (window.location.hash.indexOf('Contato') == 1) {
        document.getElementById('ed-contato').click();
    }
});