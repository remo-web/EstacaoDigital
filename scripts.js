//Mudar as tabs pela URL

$(function() {
    var loc = window.location.href; // returns the full URL
    if(/#QuemSomos/.test(loc)) {
        $('#QuemSomos').addClass('active');
        $('#index').removeClass('active');
    }
});

//MDC

$(function() {
    //ripple
    var btns = document.querySelectorAll('.mdc-button');
    for (var i = 0, btn; btn = btns[i]; i++) {
        mdc.ripple.MDCRipple.attachTo(btn);
    }
    
    //dropdown
    let menu = new mdc.menu.MDCMenu(document.querySelector('.mdc-menu'));
    document.querySelector('.mdc-menu-anchor').addEventListener('click', () => menu.open = !menu.open);
    
    //tabs
    var dynamicTabBar = window.dynamicTabBar = new mdc.tabs.MDCTabBar(document.querySelector('#dynamic-tab-bar'));
    var panels = document.querySelector('.ed-home--panels');

    dynamicTabBar.preventDefaultOnClick = true;
    function updatePanel(index) {
      var activePanel = panels.querySelector('.ed-home--panels__panel.active');
      if (activePanel) {
        activePanel.classList.remove('active');
      }
      var newActivePanel = panels.querySelector('.ed-home--panels__panel:nth-child(' + (index + 1) + ')');
      if (newActivePanel) {
        newActivePanel.classList.add('active');
      }
    }

    dynamicTabBar.listen('MDCTabBar:change', function (t) {
          var dynamicTabBar = t.detail;
          var nthChildIndex = dynamicTabBar.activeTabIndex;
      updatePanel(nthChildIndex);
    });
    
    //tabs - pedido
    var dynamicTabBar = window.dynamicTabBar = new mdc.tabs.MDCTabBar(document.querySelector('#pedido-tab-bar'));
    var panels = document.querySelector('.ed-pedido--panels');

    dynamicTabBar.preventDefaultOnClick = true;
    function updatePanel(index) {
      var activePanel = panels.querySelector('.ed-pedido--panels__panel.active');
      if (activePanel) {
        activePanel.classList.remove('active');
      }
      var newActivePanel = panels.querySelector('.ed-pedido--panels__panel:nth-child(' + (index + 1) + ')');
      if (newActivePanel) {
        newActivePanel.classList.add('active');
      }
    }

    dynamicTabBar.listen('MDCTabBar:change', function (t) {
          var dynamicTabBar = t.detail;
          var nthChildIndex = dynamicTabBar.activeTabIndex;
      updatePanel(nthChildIndex);
    });
    
    //flexible tollbar
    var toolbar = mdc.toolbar.MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
    toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');
    toolbar.listen('MDCToolbar:change', function(evt) {
        var flexibleExpansionRatio = evt.detail.flexibleExpansionRatio;
        console.log(flexibleExpansionRatio.toFixed(2));
    });
    
    //textfield
    var tfs = document.querySelectorAll('.mdc-text-field');
    for (var i = 0, tf; tf = tfs[i]; i++) {
        mdc.textField.MDCTextField.attachTo(tf);
    }
    
    //checkbox e provavelmente formfield
    [].forEach.call(document.querySelectorAll('.mdc-checkbox[data-js]'), function(checkbox) {
        var formField = checkbox.parentElement;
        var formFieldInstance = new mdc.formField.MDCFormField(formField);
        var checkboxInstance = new mdc.checkbox.MDCCheckbox(checkbox);
        formFieldInstance.input = checkboxInstance;
        
//        var row = formField.parentElement;
//        var indeterminateToggle = row.querySelector('.toggle-indeterminate');
//        if (indeterminateToggle) {
//            indeterminateToggle.addEventListener('click', function() {
//                checkboxInstance.indeterminate = !checkboxInstance.indeterminate;
//            });
//        }
//
//        var disabledToggle = row.querySelector('.toggle-disabled');
//        if (disabledToggle) {
//            disabledToggle.addEventListener('click', function() {
//                checkboxInstance.disabled = !checkboxInstance.disabled;
//            });
//        }
    });
    
    //select
    var sels = document.querySelectorAll('.mdc-select');
    for (var i = 0, sel; sel = sels[i]; i++) {
        mdc.select.MDCSelect.attachTo(sel);
    }
    
});

//fullPage

$(document).ready(function() {
	$('#fullpage').fullpage({
        anchors: ['home', 'Lonas', 'Adesivos'],
        scrollOverflow: true,
        keyboardScrolling: false,
        normalScrollElements:'.ed-home--panels__panel.fp-kill'
    });
});

//slimScroll

//$(function(){
//    $('body').slimScroll({
//        height: 'auto'
//    });
//});

//Hover do Menu... Sim, isso tudo.

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

//Muda o BG do <header>
$(function() {
    $('.mdc-tab').click(function() {
        $('.ed-header').addClass('ed-header__bg');
    });
    $('#ed-home-tab').click(function() {
        $('.ed-header').removeClass('ed-header__bg');
    });
});

//DESTAQUE - Abrir e fechar mais info
    switch (window.location.pathname) {
        case '/banner':
            $('.ed-destaque--lonas__banners').removeClass('ed-hide')
    }
$(function() {
    $('#lonas-banners-more').click(function() {
        if (
            $('.ed-destaque--lonas__front').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--lonas__front').removeClass('animated fadeIn');
            $('.ed-destaque--lonas__front').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__banners').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__banners').addClass('animated fadeIn');
        }
        else if (
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
        window.location.hash = 'Lonas/banner';
        return false;
    });
    $('#lonas-front-more').click(function() {
        if (
            $('.ed-destaque--lonas__banners').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--lonas__banners').removeClass('animated fadeIn');
            $('.ed-destaque--lonas__banners').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__front').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__front').addClass('animated fadeIn');
            
        }
        else if (
            $('.ed-destaque--lonas__back').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--lonas__back').removeClass('animated fadeIn');
            $('.ed-destaque--lonas__back').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__front').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__front').addClass('animated fadeIn');
            
        } else if (
            $('.ed-destaque--lonas__front').hasClass('animated fadeOut')
        ) {
            $('.ed-destaque--lonas__front').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__front').addClass('animated fadeIn');
        } else {
            $('.ed-destaque--lonas__front').removeClass('ed-hide');
            $('.ed-destaque--lonas__front').addClass('animated fadeIn');
        }
        window.location.hash = 'Lonas/back-light';
        return false;
    });
    $('#lonas-back-more').click(function() {
        if (
            $('.ed-destaque--lonas__banners').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--lonas__banners').removeClass('animated fadeIn');
            $('.ed-destaque--lonas__banners').addClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__back').removeClass('animated fadeOut ed-hide');
            $('.ed-destaque--lonas__back').addClass('animated fadeIn');
            
        }
        else if (
            $('.ed-destaque--lonas__front').hasClass('animated fadeIn')
        ) {
            $('.ed-destaque--lonas__front').removeClass('animated fadeIn');
            $('.ed-destaque--lonas__front').addClass('animated fadeOut ed-hide');
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
        window.location.hash = 'Lonas/front-light';
        return false;
    });
});
