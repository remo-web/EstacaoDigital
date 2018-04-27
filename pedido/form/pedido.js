//Validação
$("#ed_pedido").submit(function(event){
    var nome = document.forms["ed-pedido"]["edNome"].value;
    var pedido_nome = document.getElementById("edNome");
    var email = document.forms["ed-pedido"]["edEmail"].value;
    var pedido_email = document.getElementById("edEmail");
    
    var att = document.createAttribute("required");
    if (nome == "") {
        pedido_nome.setAttributeNode(att);
        return false;
        // handle the invalid form...
        contatoError();
    }
    if (email == "") {
        pedido_email.setAttributeNode(att);
        return false;
        // handle the invalid form...
        contatoError();
    }
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        contatoError();
    } else {
        // everything looks good!
        event.preventDefault();
        submitPedido();
    }
});

//Envio
function submitPedido(){
    // Initiate Variables With Form Content
    var nome = $("#edNome").val();
    var email = $("#edEmail").val();
    var telefone = $("#edTelefone").val();
    
    var estado = $("#edEstado").val();
    var cidade = $("#edCidade").val();
    var bairro = $("#edBairro").val();
    var rua = $("#edRua").val();
    var numero = $("#edNumero").val();
    var complemento = $("#edComplemento").val();
 
    $.ajax({
        type: "POST",
        url: "contato/contato.php",
        data: "edNome=" + nome + "&edEmail=" + email + "&edTelefone=" + telefone + "&edEstado=" + estado + "&edCidade=" + cidade + "&edBairro=" + bairro + "&edRua=" + rua + "&edNumero=" + numero + "&edComplemento=" + complemento,
        success : function(text){
            if (text == "success"){
                contatoSuccess();
            } else {
                contatoError();
            }
        }
    });
}

function contatoSuccess(){
    $( "#ed-contato-enviado" ).removeClass( "ed-hide" );
    $( '#edNome, #edEmail, #edTelefone, #edEstado', '#edCidade', '#edBairro', '#edRua', '#edNumero', '#edComplemento' ).val('');
}

function contatoError(){
    $( "#ed-contato-erro" ).removeClass( "ed-hide" );
}

