$("#ed_contato").submit(function(event){
    var nome = document.forms["ed-contato"]["ed-contato-nome"].value;
    var contato_nome = document.getElementById("ed-contato-nome");
    var email = document.forms["ed-contato"]["ed-contato-email"].value;
    var contato_email = document.getElementById("ed-contato-email");
    var assunto = document.forms["ed-contato"]["ed-contato-assunto"].value;
    var contato_ass = document.getElementById("ed-contato-assunto");
    var mensagem = document.forms["ed-contato"]["ed-contato-mensagem"].value;
    var contato_msg = document.getElementById("ed-contato-mensagem");
    var att = document.createAttribute("required");
    if (nome == "") {
        contato_nome.setAttributeNode(att);
        return false;
        // handle the invalid form...
        contatoError();
    }
    if (email == "") {
        contato_email.setAttributeNode(att);
        return false;
        // handle the invalid form...
        contatoError();
    }
    if (assunto == "") {
        contato_ass.setAttributeNode(att);
        return false;
        // handle the invalid form...
        contatoError();
    } 
    if (mensagem == "") {
        contato_msg.setAttributeNode(att);
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
        submitContato();
    }
});

function submitContato(){
    // Initiate Variables With Form Content
    var nome = $("#ed-contato-nome").val();
    var email = $("#ed-contato-email").val();
    var assunto = $("#ed-contato-assunto").val();
    var mensagem = $("#ed-contato-mensagem").val();
 
    $.ajax({
        type: "POST",
        url: "contato/contato.php",
        data: "ed-contato-nome=" + nome + "&ed-contato-email=" + email + "&ed-contato-assunto=" + assunto + "&ed-contato-mensagem=" + mensagem,
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
    $( '#ed-contato-nome, #ed-contato-email, #ed-contato-assunto, #ed-contato-mensagem' ).val('');
}

function contatoError(){
    $( "#ed-contato-erro" ).removeClass( "ed-hide" );
}

