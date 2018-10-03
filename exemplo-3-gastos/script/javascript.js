//primeiro pegar os valores dos inputs na hora de clicar o botão
const btn = document.querySelector(".transacao__button");
//aqui embaixo adicionar o evento de click na const btn
btn.addEventListener("click", function(event){
    //evitar que a informação apague dos campos na hora do clique do botão
    event.preventDefault();
    //agora já posso puxar os valores dos inputs digitados pelo usuário
    const inputNome = document.getElementById("transacaoInputName");
    const inputValor = document.getElementById("transacaoInputMoney");
    const inputData = document.getElementById("transacaoInputDate");
    //agora já posso criar uma linha tr
    const linha = document.createElement("tr");

    //criada a linha, posso criar as colunas com seus conteúdos

    //primeiro criar a linha de inputName com o dado que foi inserido
    const name = document.createElement("td");
    //segundo, puxar o valor de inputNome
    const nameTexto = document.createTextNode(inputNome.value);
    //inserir o valor dentro da td que atribui o nome
    name.appendChild(nameTexto);

    const value = document.createElement("td");
    const valueTexto = document.createTextNode(inputValor.value);
    value.appendChild(valueTexto);

    const date = document.createElement("td");
    const dateTexto = document.createTextNode(inputData.value);
    date.appendChild(dateTexto);

    linha.appendChild(name);
    linha.appendChild(value);
    linha.appendChild(date);

    const tabela = document.querySelector(".extrato__table");
    tabela.appendChild(linha);


})