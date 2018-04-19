//LONAS

$('#mais_lonas').click(function(){
    
    var $div = $('div[id^="pedido_lona"]:last'); // get the last DIV which ID starts with ^= "pedido_lona"
    var num = parseInt( $div.prop("id").match(/\d+/g), 10 ) +1; // Read the Number from that DIV's ID (i.e: 3 from "pedido_lona3") // And increment that number by 1
    var $lona_clone = $div.clone().prop('id', 'pedido_lona'+num ); // Clone it and assign the new ID (i.e: from num 4 to ID "pedido_lona4")
    
    $lona_clone.find('h5[id^="lona"]:last').prop('id', 'lona'+num ).html('Lona '+num +'<button class="mdc-button mdc-typography--button mdc-theme--text-hint-on-light ed-pedido--panels__title--remove"><i class="fas fa-times-circle"></i>remover</button>');
    $lona_clone.find('select[id^="lona_tipo"]:last').prop('id', 'lona_tipo'+num ).prop('name', 'lona_tipo'+num );
    $lona_clone.find('select[id^="lona_acabamento"]:last').prop('id', 'lona_acabamento'+num );
    $lona_clone.find('input[id^="lona_largura"]:last').prop('id', 'lona_largura'+num );
    $lona_clone.find('input[id^="lona_altura"]:last').prop('id', 'lona_altura'+num );
    $lona_clone.find('input[id^="lona_quantidade"]:last').prop('id', 'lona_quantidade'+num );
    $lona_clone.find('div[id^="lona_anexo"]:last').prop('id', 'lona_anexo'+num );
    
    $div.after( $lona_clone ); // Finally insert $lona_clone wherever you want

});

//KILL CLONE TROOPERS

$(document).on('click', '.ed-pedido--panels__title--remove', function() {
    $(this).parent().parent().parent().remove();
});