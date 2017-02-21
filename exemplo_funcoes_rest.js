/** Envia um pedido de token de acesso */
function getAccessToken(dados){
    //Requesição Ajax:
    var token = "";

    jQuery.ajax({
        url: urlGetAccessToken,
        type: 'post',
        async: false,
        dataType: 'JSON',
        data: dados,
        success: function(resposta){
            KOApp.hidePreloader();
            token = JSON.parse(resposta);
        }

    });

    return token;
}
