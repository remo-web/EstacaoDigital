function edTab() {
    if (window.location.href("estacaodigitalrio.com.br") > -1) {
        document.getElementById('ed-tab-home').classList.add('mdc-tab--active');
        document.getElementById('ed-indicator-home').classList.remove('ed-hide');
    }
    if (window.location.href.indexOf("QuemSomos") > -1) {
        document.getElementById('ed-tab-quemsomos').classList.add('mdc-tab--active');
        document.getElementById('ed-indicator-quemsomos').classList.remove('ed-hide');
    }
    if (window.location.href.indexOf("Servicos") > -1) {
        document.getElementById('ed-tab-servicos').classList.add('mdc-tab--active');
        document.getElementById('ed-indicator-servicos').classList.remove('ed-hide');
    }
    if (window.location.href.indexOf("Fizemos") > -1) {
        document.getElementById('ed-tab-fizemos').classList.add('mdc-tab--active');
        document.getElementById('ed-indicator-fizemos').classList.remove('ed-hide');
    }
    if (window.location.href.indexOf("Contato") > -1) {
        document.getElementById('ed-tab-contato').classList.add('mdc-tab--active');
        document.getElementById('ed-indicator-contato').classList.remove('ed-hide');
    }
};