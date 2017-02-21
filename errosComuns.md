## Erros Comuns
Exemplo de animação enquanto um pedido via ajax é feito.
Quando é sync (Define-se um timeout):

```js
function getAccessToken(dados){
    //Requesição Ajax:
    KOApp.showIndicator();
    var token = "";

    setTimeout(function () {

        $.ajax({
            url: urlGetAccessToken,
            type: 'post',
            async: false,
            dataType: 'JSON',
            data: dados,

            success: function (resposta) {
                token = JSON.parse(resposta);
                KOApp.hideIndicator();

            },
            error: function () {
                alert('Erro');
            }

        });
    }, 10);

    return token;
}
```
Quando é async:
```js
function getAccessToken(dados){
    //Requesição Ajax:
    KOApp.showIndicator();
    var token = "";

        $.ajax({
            url: urlGetAccessToken,
            type: 'post',
            dataType: 'JSON',
            data: dados,

            success: function (resposta) {
                token = JSON.parse(resposta);
                KOApp.hideIndicator();

            },
            error: function () {
                alert('Erro');
            }

        });

    return token;
}
```
