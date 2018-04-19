function updatePreco() {
    var preco = 0 ;
    var largura = document.getElementsByClassName('.ed-pedido--lona__largura') ;
    var altura = document.getElementsByClassName('.ed-pedido--lona__altura') ;
    var calcLona = largura * altura ;
    $(document).find('#pedido_preco').html(calcLona) ;
};

//Referencia
//https://stackoverflow.com/questions/20964493/input-array-values-sum-using-javascript