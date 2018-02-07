//MDC

$(function() {
    //ripple
    var btns = document.querySelectorAll('.mdc-button');
    for (var i = 0, btn; btn = btns[i]; i++) {
        mdc.ripple.MDCRipple.attachTo(btn);
    }
    //tabs
//    mdc.tabs.MDCTabBar.attachTo(document.querySelector('#mdc-tab-bar'));
    //dropdown
    let menu = new mdc.menu.MDCSimpleMenu(document.querySelector('.mdc-simple-menu'));
    document.querySelector('.mdc-menu-anchor').addEventListener('click', () => menu.open = !menu.open);
//    
//    var dynamicTabBar = window.dynamicTabBar = new mdc.tabs.MDCTabBar(document.querySelector('#dynamic-tab-bar'));
//var dots = document.querySelector('.dots');
//var panels = document.querySelector('.panels');
//
//dynamicTabBar.tabs.forEach(function(tab) {
//  tab.preventDefaultOnClick = true;
//});
//
//function updateDot(index) {
//  var activeDot = dots.querySelector('.dot.active');
//  if (activeDot) {
//    activeDot.classList.remove('active');
//  }
//  var newActiveDot = dots.querySelector('.dot:nth-child(' + (index + 1) + ')');
//  if (newActiveDot) {
//    newActiveDot.classList.add('active');
//  }
//}
//
//function updatePanel(index) {
//  var activePanel = panels.querySelector('.panel.active');
//  if (activePanel) {
//    activePanel.classList.remove('active');
//  }
//  var newActivePanel = panels.querySelector('.panel:nth-child(' + (index + 1) + ')');
//  if (newActivePanel) {
//    newActivePanel.classList.add('active');
//  }
//}
//
//dynamicTabBar.listen('MDCTabBar:change', function ({detail: tabs}) {
//  var nthChildIndex = tabs.activeTabIndex;
//
//  updatePanel(nthChildIndex);
//  updateDot(nthChildIndex);
//});
//
//dots.addEventListener('click', function (evt) {
//  if (!evt.target.classList.contains('dot')) {
//    return;
//  }
//
//  evt.preventDefault();
//
//  var dotIndex = [].slice.call(dots.querySelectorAll('.dot')).indexOf(evt.target);
//
//  if (dotIndex >= 0) {
//    dynamicTabBar.activeTabIndex = dotIndex;
//  }
//
//  updatePanel(dotIndex);
//  updateDot(dotIndex);
//})

});

//fullPage

$(document).ready(function() {
	$('#fullpage').fullpage({
        anchors:['home', 'Lonas', 'Adesivos', 'Placas', 'Papel'],
        controlArrows: false,
    });
});

//thumbs quadradas

$(document).ready(function() {
    var cw = $('.ed-fizemos--gallery--card').width();
    $('.ed-fizemos--gallery--card').css({'height':cw+'px'});
});

//slimScroll

//$(function(){
//    $('body').slimScroll({
//        height: 'auto'
//    });
//});

//Troca a mdc-tab selecionada com base no fp-slide exibido

$(window).on('hashchange', function() {
    var loc = window.location.href; // returns the full URL
    if(/home/.test(loc)) {
        $('#ed-tab__quemsomos').removeClass('mdc-tab--active');
        $('#ed-tab__servicos').removeClass('mdc-tab--active');
        $('#ed-tab__fizemos').removeClass('mdc-tab--active');
        $('#ed-tab__home').addClass('mdc-tab--active');
        $('.mdc-tab-bar__indicator').css({ 'transform': "translateX(0px) scale(0.2, 1)" });
    }
    if(/QuemSomos/.test(loc)) {
        $('#ed-tab__home').removeClass('mdc-tab--active');
        $('#ed-tab__servicos').removeClass('mdc-tab--active');
        $('#ed-tab__fizemos').removeClass('mdc-tab--active');
        $('#ed-tab__quemsomos').addClass('mdc-tab--active');
        $('.mdc-tab-bar__indicator').css({ 'transform': "translateX(160px) scale(0.2, 1)" });
    }
    if(/Servicos/.test(loc)) {
        $('#ed-tab__home').removeClass('mdc-tab--active');
        $('#ed-tab__quemsomos').removeClass('mdc-tab--active');
        $('#ed-tab__fizemos').removeClass('mdc-tab--active');
        $('#ed-tab__servicos').addClass('mdc-tab--active');
        $('.mdc-tab-bar__indicator').css({ 'transform': "translateX(320px) scale(0.2, 1)" });
    }
    if(/Fizemos/.test(loc)) {
        $('#ed-tab__home').removeClass('mdc-tab--active');
        $('#ed-tab__quemsomos').removeClass('mdc-tab--active');
        $('#ed-tab__servicos').removeClass('mdc-tab--active');
        $('#ed-tab__fizemos').addClass('mdc-tab--active');
        $('.mdc-tab-bar__indicator').css({ 'transform': "translateX(480px) scale(0.2, 1)" });
    }
});

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