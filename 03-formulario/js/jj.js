function checarUsuario() {

    // var btn = document.querySelector("#checar-senha");
    // btn.addEventListener("click", function () {
        //pegar o valor do input do nome e da senha
        var nomeDoUsuario =
            document.querySelector('#usuario').value;
        var senhaDoUsuario =
            document.querySelector('#password').value;
        if (nomeDoUsuario == "") {
            alert('favor digitar um nome de usuário válido');
            return false;
        }

        if (senhaDoUsuario.length < 6) {
            alert('favor digitar uma senha com mais de 6 caracteres');
            return false;
        } else {
            alert("Dados preenchidos corretamente!");
            return true;
        }



    // });

}

function checarCheckbox() {
    // var button = document.querySelector("#checkbox");
    // button.addEventListener('click', function () {
        var checkedMulher = document.querySelector("#mulher").checked;
        var checkedPoderosa = document.querySelector("#poderosa").checked;
        var checkedLinda = document.querySelector("#linda").checked;
        var checkedMaravilhosa = document.querySelector("#maravilhosa").checked;

        if (checkedMulher == false && checkedPoderosa == false && checkedLinda == false && checkedMaravilhosa == false) {
            alert("Você precisa selecionar pelo menos uma opção acima");
            return false;
        }
        else {
            alert("A seleção está ok!");
            return true;
        }

    // })



}

function checarRadio() {

    var mulher = document.forms[0];
    var i;
    for (i = 0; i < mulher.length; i++) {
        if (mulher[i].checked) {
            alert("A opção foi selecionada corretamente.");
        }
    }

}

var btnBtn = document.querySelector("#checkSelecao");

btnBtn.addEventListener("click", function(){
    var select = document.getElementsByTagName("option");
    // var y;
    for(var y = 0; y <= select.length; y++){
        if(select[y].selected){
            alert("Você fez a seleção corretamente!");
        }
    }
});
