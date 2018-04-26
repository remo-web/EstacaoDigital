$(function () {
    //select
    var sels = document.querySelectorAll('.mdc-select');
    for (var i = 0, sel; sel = sels[i]; i++) {
        new mdc.select.MDCSelect.attachTo(sel);
    }
    
    //tabs
    var dynamicTabBar = window.dynamicTabBar = new mdc.tabs.MDCTabBar(document.querySelector('.dynamic-tab-bar2'));
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
});