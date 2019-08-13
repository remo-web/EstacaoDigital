function edMDC() {
    //ripple
    var btns = document.querySelectorAll('.mdc-button');
    for (var i = 0, btn; btn = btns[i]; i++) {
        mdc.ripple.MDCRipple.attachTo(btn);
    }
    
    //flexible toolbar
//    var toolbar = mdc.toolbar.MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
//    toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');
//    toolbar.listen('MDCToolbar:change', function(evt) {
//        var flexibleExpansionRatio = evt.detail.flexibleExpansionRatio;
//        console.log(flexibleExpansionRatio.toFixed(2));
//    });
    var topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'));
    
    //textfield
    var textFields = document.querySelectorAll('.mdc-text-field')
    for (var i = 0, textField; textField = textFields[i]; i++) {
        mdc.textField.MDCTextField.attachTo(textField);
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
    
    //elevation on hover
    $('.mdc-card').hover(function(){
        $(this).toggleClass("mdc-elevation--z8");
    });
    
    //drawer
    let drawer = new mdc.drawer.MDCDrawer(document.querySelector('.mdc-drawer--modal'));
    document.querySelector('.ed-drawer__icon').addEventListener('click', () => drawer.open = true);
    var drawerClose = document.querySelectorAll('.ed-drawer--item');
    for (var i = 0, dC; dC = drawerClose[i]; i++) {
        dC.addEventListener('click', () => drawer.open = false);
    }
    mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer--modal'));
    
};