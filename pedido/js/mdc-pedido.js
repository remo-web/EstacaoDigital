$(function () {
    //select
    const sels = document.querySelectorAll('.mdc-select');
    for (var i = 0, sel; sel = sels[i]; i++) {
        new mdc.select.MDCSelect.attachTo(sel);
    }
    
    //tabs
    var dynamicTabBar2 = window.dynamicTabBar2 = new mdc.tabs.MDCTabBar(document.querySelector('.dynamic-tab-bar2'));
    var panelsPedido = document.querySelector('.ed-pedido--panels');

    dynamicTabBar2.preventDefaultOnClick = true;
    function updatePanelPedido(index) {
      var activePanelPedido = panelsPedido.querySelector('.ed-pedido--panels__panel.active');
      if (activePanelPedido) {
        activePanelPedido.classList.remove('active');
      }
      var newActivePanelPedido = panelsPedido.querySelector('.ed-pedido--panels__panel:nth-child(' + (index + 1) + ')');
      if (newActivePanelPedido) {
        newActivePanelPedido.classList.add('active');
      }
    }
    dynamicTabBar2.listen('MDCTabBar:change', function (t) {
          var dynamicTabBar2 = t.detail;
          var nthChildIndexPedido = dynamicTabBar2.activeTabIndex;
      updatePanelPedido(nthChildIndexPedido);
    });
    
    //dialog
    var dialog = new mdc.dialog.MDCDialog.attachTo(document.querySelector('#my-mdc-dialog'));
    
    dialog.listen('MDCDialog:accept', function() {
        console.log('accepted');
    })
    
    dialog.listen('MDCDialog:cancel', function() {
        console.log('canceled');
    })
    
    document.querySelector('#default-dialog-activation').addEventListener('click', function (evt) {
        dialog.lastFocusedTarget = evt.target;
        dialog.show();
    })
    
});